import pdfplumber
from app.chunker import chunk_text
from app.config import client, supabase


def get_embedding(text):
    response = client.models.embed_content(
        model="models/gemini-embedding-001",
        contents=text
    )
    return response.embeddings[0].values


def ingest_resume():
    print("Reading PDF...")

    with pdfplumber.open("data/JayShah-DataEngineer.pdf") as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text() or ""

    chunks = chunk_text(text)

    # Insert parent document
    doc = supabase.table("documents").insert({
        "title": "Jay Resume",
        "source": "JayShah-DataEngineer.pdf"
    }).execute()

    document_id = doc.data[0]["id"]
    print("Created document:", document_id)

    for i, chunk in enumerate(chunks):
        print(f"Embedding chunk {i+1}/{len(chunks)}")

        embedding = get_embedding(chunk)

        supabase.table("document_chunks").insert({
            "document_id": document_id,
            "content": chunk,
            "section": "resume",
            "embedding": embedding
        }).execute()

    print("Ingestion complete ✅")


if __name__ == "__main__":
    ingest_resume()