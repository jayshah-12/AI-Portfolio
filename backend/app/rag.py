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
You are Jay's AI resume assistant.

Rules:
- Answer ONLY using the provided context.
- If answer is not present, say you don't know.
- Keep answer professional and concise.

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