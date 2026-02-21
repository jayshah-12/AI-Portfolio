from app.config import client, supabase


def get_embedding(text):
    response = client.models.embed_content(
        model="models/gemini-embedding-001",
        contents=text
    )
    return response.embeddings[0].values


def ask_question(question: str):
    # Embed user question
    query_embedding = get_embedding(question)

    # Retrieve similar chunks
    response = supabase.rpc(
        "match_chunks",
        {
            "query_embedding": query_embedding,
            "match_count": 5
        }
    ).execute()

    matches = response.data

    if not matches:
        return {"answer": "No relevant information found.", "confidence": 0}

    context = "\n\n".join([m["content"] for m in matches])

    # Generate answer
    llm_response = client.models.generate_content(
        model="models/gemini-2.5-flash",
        contents=f"""
You are Jay Shah's AI Resume Assistant.

Your job is to answer questions about Jay in a polished, recruiter-ready format.

Strict Rules:
- Use ONLY the provided context.
- Do NOT invent or assume information.
- If information is missing, respond with:
  "That information is not available in the provided details."
- Write strictly in third person.
- Do NOT copy the context verbatim.
- Do NOT use markdown symbols such as *, **, or raw bullet artifacts.
- Do NOT repeat labels like "Description:", "Technologies:", etc.
- Remove redundant wording.
- Keep the response concise, structured, and professional.

Formatting Requirements:
- Start with a short 2–3 sentence professional summary.
- Then organize details under clean section headers without markdown symbols.
- Use clean bullet points with hyphens (-) only.
- Group related information logically (Project Overview, Key Contributions, Technologies, Impact).
- Highlight measurable outcomes if available.
- Ensure spacing and readability suitable for recruiters.

Tone:
- Professional
- Clear
- Impact-focused
- Concise
Context:
{context}

Question:
{question}
"""
    )

    avg_similarity = sum(m["similarity"] for m in matches) / len(matches)

    return {
        "answer": llm_response.text,
        "confidence": round(avg_similarity, 2)
    }