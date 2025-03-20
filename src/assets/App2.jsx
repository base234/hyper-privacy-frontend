import { useState } from "react";
import axios from "axios";

export default function PrivacyAdEngine() {
  const [content, setContent] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:8000/recommend";

  const sampleContent = {
    tech: "The future of artificial intelligence is transforming how we interact with technology. From smart assistants to recommendation systems, AI is becoming an integral part of our daily lives. However, concerns about privacy and data protection remain significant challenges in this field. Companies are investing heavily in developing more advanced machine learning algorithms and neural networks.",

    health:
      "Maintaining a healthy lifestyle requires balanced nutrition and regular exercise. Research shows that a diet rich in fruits, vegetables, and whole grains can reduce the risk of chronic diseases. Physical activity, even in small amounts, can improve cardiovascular health and mental wellbeing. Many healthcare providers now recommend preventive measures alongside traditional treatments.",

    finance:
      "Investment strategies should be tailored to individual financial goals and risk tolerance. Diversification across different asset classes can help mitigate market volatility. Retirement planning requires careful consideration of long-term income needs and inflation. Financial advisors often recommend a mix of stocks, bonds, and alternative investments for balanced portfolios.",
  };

  const loadSampleContent = (type) => setContent(sampleContent[type]);

  const analyzeContent = async () => {
    if (!content.trim()) return alert("Please enter content to analyze.");

    setLoading(true);
    setResults(null);

    const payload = {
      data: {
        content: content,
      }
    };

    try {
      const response = await axios.post(API_URL, payload);
      setResults(response.data);
    } catch (error) {
      setResults({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Privacy-First Ad Engine
        </h1>
        <p className="text-gray-600">
          Deliver relevant ads without tracking personal data
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Webpage Content
          </h2>
          <p className="text-gray-600">Enter content to analyze:</p>
          <textarea
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste webpage content here..."
          ></textarea>
          <div className="flex gap-2 mt-3">
            {Object.keys(sampleContent).map((key) => (
              <button
                key={key}
                onClick={() => loadSampleContent(key)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)} Sample
              </button>
            ))}
          </div>
          <button
            onClick={analyzeContent}
            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
          >
            Analyze Content
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Recommended Ads
          </h2>
          <div className="mt-4">
            {loading ? (
              <p className="text-center text-gray-500 animate-pulse">
                Analyzing content...
              </p>
            ) : results ? (
              results.error ? (
                <p className="text-red-500">Error: {results.error}</p>
              ) : results.recommended_ads?.length ? (
                <div>
                  <h3 className="text-lg font-semibold">Matching Ads</h3>
                  {results.recommended_ads.map((match, index) => (
                    <div
                      key={index}
                      className="p-3 mt-2 bg-blue-50 border-l-4 border-blue-500 rounded-md"
                    >
                      <p className="font-semibold">{match.ad.content}</p>
                      <p className="text-sm text-gray-600">
                        Relevance: {(match.relevance_score * 100).toFixed(1)}% -{" "}
                        {match.match_reason}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No matching ads found.</p>
              )
            ) : (
              <p className="text-gray-500">
                Enter content and click "Analyze Content".
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
