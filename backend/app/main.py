from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.rag import ask_question

app = FastAPI(
    title="Jay Resume RAG API",
    version="1.0.0"
)

# -----------------------------
# CORS Configuration
# -----------------------------
# from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # TEMP for debugging
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Request Model
# -----------------------------
class Question(BaseModel):
    question: str

# -----------------------------
# Health Check (optional but useful)
# -----------------------------
@app.get("/")
def root():
    return {"status": "RAG backend running 🚀"}

# -----------------------------
# Ask Endpoint
# -----------------------------
@app.post("/ask")
def ask(data: Question):
    try:
        result = ask_question(data.question)

        # Ensure consistent return structure
        return {
            "answer": result.get("answer", ""),
            "confidence": result.get("confidence", 0.0)
        }

    except Exception as e:
        return {
            "error": str(e)
        }