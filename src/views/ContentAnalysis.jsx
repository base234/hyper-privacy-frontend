import React, { Fragment, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

import axios from "axios";

const ContentAnalysis = () => {
  const API_URL = import.meta.env.VITE_APP_API;

  const [content, setContent] = useState("");
  const [recommendedAds, setRecommendedAds] = useState([]);
  const [contentTopics, setContentTopics] = useState([]);
  const [privacyMetrics, setPrivacyMetrics] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const sampleContent = {
    tech: "The future of artificial intelligence is transforming how we interact with technology. From smart assistants to recommendation systems, AI is becoming an integral part of our daily lives. However, concerns about privacy and data protection remain significant challenges in this field. Companies are investing heavily in developing more advanced machine learning algorithms and neural networks.",

    long_content: `Artificial Intelligence and Machine Learning: The Future of Technology

Artificial intelligence (AI) and machine learning (ML) are revolutionizing industries across the globe. From healthcare to finance, transportation to education, these technologies are creating new opportunities and solving complex problems.

What is AI and Machine Learning?
AI refers to computer systems designed to mimic human intelligence and perform tasks such as visual perception, speech recognition, decision-making, and language translation. Machine learning, a subset of AI, involves algorithms that enable computers to learn from and make predictions based on data.

Applications in Various Industries:
- Healthcare: AI aids in disease diagnosis, drug discovery, and personalized medicine
- Finance: ML models detect fraudulent transactions and optimize investment strategies
- Transportation: Self-driving cars use AI to navigate and make decisions
- Education: Adaptive learning platforms personalize education for students
- Retail: Recommendation systems enhance customer experience

The Future of AI and ML:
As computing power increases and algorithms improve, we can expect AI to become more sophisticated. Future developments may include more advanced natural language processing, improved computer vision, and more efficient decision-making systems.

Ethical Considerations:
The rapid advancement of AI raises important ethical questions. Issues such as privacy concerns, algorithmic bias, and the impact on employment require careful consideration. It's crucial that AI development proceeds with ethical guidelines and regulations.

Learning AI and ML:
For those interested in entering this field, there are numerous online courses, degree programs, and bootcamps available. Skills in programming (particularly Python), statistics, and data analysis are highly valuable.

As we move forward, collaboration between technologists, policymakers, and ethicists will be essential to ensure that AI benefits humanity while minimizing potential risks.`,

    health:
      "Maintaining a healthy lifestyle requires balanced nutrition and regular exercise. Research shows that a diet rich in fruits, vegetables, and whole grains can reduce the risk of chronic diseases. Physical activity, even in small amounts, can improve cardiovascular health and mental wellbeing. Many healthcare providers now recommend preventive measures alongside traditional treatments.",

    finance:
      "Investment strategies should be tailored to individual financial goals and risk tolerance. Diversification across different asset classes can help mitigate market volatility. Retirement planning requires careful consideration of long-term income needs and inflation. Financial advisors often recommend a mix of stocks, bonds, and alternative investments for balanced portfolios.",
  };

  const analyzeContent = async () => {
    if (!content.trim()) return alert("Please enter content to analyze.");

    setIsLoading(true);
    setRecommendedAds([]);
    setContentTopics([]);
    setPrivacyMetrics({});

    const payload = {
      data: {
        content: content,
      },
    };

    await axios
      .post(API_URL, payload)
      .then((response) => {
        setRecommendedAds(
          (prevRecommendedAds) => response.data.recommended_ads
        );
        setContentTopics((prevContentTopics) => response.data.content_topics);
        setPrivacyMetrics(
          (prevPrivacyMetrics) => response.data.privacy_metrics
        );
      })
      .catch((error) => {
        setResults({ error: error.message });
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1200);
      });
  };

  return (
    <Fragment>
      {isLoading && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-9 h-9 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="text-gray-700 mt-4">Processing content...</p>
          </div>
        </div>
      )}
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />

        <main className="max-w-10/12 mx-auto w-full">
          <div className="w-full my-10 flex items-start space-x-8">
            <div className="w-1/2 px-6 pt-4 pb-6 bg-white rounded-md shadow">
              <h2 className="font-semibold text-xl">Content Analysis</h2>
              <p className="mt-2 text-sm text-gray-500">
                Copy and Paste webpage content below and see privacy-preserving
                ad recommendations or use sample content below.
              </p>
              <textarea
                className="mt-4 w-full h-64 my-4 p-4 border border-gray-300 rounded-md"
                placeholder="Paste webpage content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
              <div className="flex flex-col">
                <h4 className="text-normal font-medium text-gray-600">
                  Sample contents:
                </h4>
                <div className="mt-2 flex space-x-4">
                  <button
                    className="text-sm text-gray-700 underline underline-offset-4 decoration-dashed decoration-gray-300 hover:decoration-gray-600 cursor-pointer"
                    onClick={() => setContent(sampleContent.tech)}
                  >
                    Tech
                  </button>
                  <button
                    className="text-sm text-gray-700 underline underline-offset-4 decoration-dashed decoration-gray-300 hover:decoration-gray-600 cursor-pointer"
                    onClick={() => setContent(sampleContent.long_content)}
                  >
                    Long Content
                  </button>
                  <button
                    className="text-sm text-gray-700 underline underline-offset-4 decoration-dashed decoration-gray-300 hover:decoration-gray-600 cursor-pointer"
                    onClick={() => setContent(sampleContent.health)}
                  >
                    Health
                  </button>
                  <button
                    className="text-sm text-gray-700 underline underline-offset-4 decoration-dashed decoration-gray-300 hover:decoration-gray-600 cursor-pointer"
                    onClick={() => setContent(sampleContent.finance)}
                  >
                    Finance
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end">
                <button
                  className="px-4 py-2 font-semibold text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
                  onClick={analyzeContent}
                >
                  Analyze Content
                </button>
              </div>
            </div>
            <div className="w-1/2 px-6 pt-4 pb-6 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">
                Content Analysis Results
              </h2>

              {!isLoading && (
                <Fragment>
                  <div className="mt-4 mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Privacy Metrics
                    </h3>
                    <div className="mt-4 flex flex-col space-y-2">
                      <p className="text-sm text-gray-600">
                        Anonymization:{" "}
                        {privacyMetrics.anonymization_applied ? (
                          <span className="text-green-600">Yes</span>
                        ) : (
                          <span className="text-red-600">No</span>
                        )}
                      </p>
                      <p className="text-sm text-gray-600">
                        Differential Privacy:{" "}
                        {privacyMetrics.differential_privacy_applied ? (
                          <span className="text-green-600">Yes</span>
                        ) : (
                          <span className="text-red-600">No</span>
                        )}
                      </p>
                      <p className="text-sm text-gray-600">
                        Local Processing:{" "}
                        {privacyMetrics.local_processing_simulated ? (
                          <span className="text-green-600">Yes</span>
                        ) : (
                          <span className="text-red-600">No</span>
                        )}
                      </p>
                    </div>
                  </div>
                  {contentTopics.length > 0 && (
                    <div className="mt-10 mb-6">
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Content Topics
                      </h3>
                      <div className="inline-flex flex-wrap items-center gap-3">
                        {contentTopics.map((contentTopic, index) => (
                          <span
                            key={index}
                            className="px-3 py-0.5 text-sm bg-gray-100 text-gray-600 rounded-full"
                          >
                            {contentTopic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {recommendedAds.length > 0 && (
                    <div className="mt-10 mb-6">
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Recommended Ads
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {recommendedAds.map((recommendedAd, index) => (
                          <div
                            key={index}
                            className="px-4 pt-3 pb-4 border border-gray-200 flex flex-col rounded-lg"
                          >
                            <span className="text-xs font-semibold bg-gray-100 text-gray-600">
                              <span className="font-normal">Relevance Score: </span>
                              {(recommendedAd.relevance_score * 100).toFixed(
                                1
                              ) > 75 ? (
                                <span className="text-green-800">
                                  {(
                                    recommendedAd.relevance_score * 100
                                  ).toFixed(1)}
                                  %
                                </span>
                              ) : (recommendedAd.relevance_score * 100).toFixed(
                                  1
                                ) > 50 ? (
                                <span className="text-yellow-600">
                                  {(
                                    recommendedAd.relevance_score * 100
                                  ).toFixed(1)}
                                  %
                                </span>
                              ) : (
                                <span className="text-red-800">
                                  {(
                                    recommendedAd.relevance_score * 100
                                  ).toFixed(1)}
                                  %
                                </span>
                              )}
                            </span>
                            <h3 className="mt-2 text-sm font-medium text-gray-700">
                              {recommendedAd.ad.content}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {recommendedAd.ad.description}
                            </p>
                            <p className="mt-4 text-sm text-gray-500">
                              {recommendedAd.match_reason}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default ContentAnalysis;
