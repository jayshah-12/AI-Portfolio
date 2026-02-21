import { useState } from "react";

export default function AskJay() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [confidence, setConfidence] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");
    setConfidence(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
      setConfidence(data.confidence);
    } catch (err) {
      setAnswer("⚠️ Unable to connect to AI backend.");
    }

    setLoading(false);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-3">
          Ask My AI Assistant
        </h2>
        <p className="text-muted-foreground mb-10">
          Skip the scrolling. Ask me directly.
            My AI assistant knows my experience better than any resume.
        </p>

        {/* Input */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Ask about my experience, AWS skills, projects..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 px-5 py-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition"
          />

          <button
            onClick={askQuestion}
            className="px-6 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            {loading ? "Thinking..." : "Ask"}
          </button>
        </div>

        {/* Answer Box */}
        {answer && (
          <div className="mt-10 text-left bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
            <p className="text-white leading-relaxed whitespace-pre-line">
              {answer}
            </p>

            {confidence !== null && (
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Confidence
                </p>
                <div className="w-full bg-zinc-800 rounded-full h-2">
                  <div
                    className="bg-white h-2 rounded-full transition-all"
                    style={{ width: `${confidence * 100}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {(confidence * 100).toFixed(0)}%
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}