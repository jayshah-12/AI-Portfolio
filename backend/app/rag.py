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

Your role is to answer questions about Jay in a professional, recruiter-friendly manner.

Strict Rules:
- Use ONLY the provided context.
- Do NOT invent or assume information.
- If the answer is not present in the context, respond with:
  "That information is not available in the provided details."
- Write in third person.
- Reformat raw bullet points into clean, structured summaries.
- Do NOT copy the text verbatim — synthesize and rewrite it professionally.
- Keep answers concise but impactful.
- When relevant, organize information using clear bullet points.
- Highlight key technologies, tools, and measurable impact where available.
- Avoid repetition.
- Avoid markdown asterisks or raw formatting artifacts.

Formatting Guidelines:
- Use short paragraphs or structured bullet sections.
- Group related information logically (e.g., Projects, Technologies, Impact).
- Ensure readability suitable for recruiters.
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