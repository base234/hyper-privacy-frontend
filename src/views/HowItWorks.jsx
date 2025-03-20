import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="mt-10 mb-20 max-w-4xl mx-auto w-full">
        <h1 className="font-bold text-4xl tracking-tight">How it works?</h1>

        <div className="mt-10 flex flex-col space-y-6">
          <div className="flex items-start space-x-4">
            <div className="font-medium h-8 w-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
              1
            </div>
            <div>
              <h4 className="mt-0.5 font-semibold text-lg text-gray-600">
                Content Analysis
              </h4>
              <p className="mt-1 text-gray-500">
                Webpage content is analyzed to extract topics, entities, and
                keywords
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="font-medium h-8 w-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
              2
            </div>
            <div>
              <h4 className="mt-0.5 font-semibold text-lg text-gray-600">
                Privacy Layer
              </h4>
              <p className="mt-1 text-gray-500">
                Personal identifiers are removed, and privacy-preserving
                techniques are applied
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="font-medium h-8 w-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
              3
            </div>
            <div>
              <h4 className="mt-0.5 font-semibold text-lg text-gray-600">
                Ad Matching
              </h4>
              <p className="mt-1 text-gray-500">
                The system matches ads to content based on relevance
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="font-medium h-8 w-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
              4
            </div>
            <div>
              <h4 className="mt-0.5 font-semibold text-lg text-gray-600">
                Result Delivery
              </h4>
              <p className="mt-1 text-gray-500">
                Relevant ads are returned without tracking the user
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col">
          <h1 className="font-bold text-2xl tracking-tight">
            Privacy Techniques
          </h1>
          <div className="mt-8 mb-6 flex flex-col space-y-8">
            <div className="flex flex-col">
              <p className="w-full font-semibold text-lg text-gray-600">
                Differential Privacy:
              </p>
              <p className="mt-1 text-lg text-gray-500">
                We add calibrated noise to numerical values, making it
                impossible to determine if a specific user's data was used in
                the computation.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="w-full font-semibold text-lg text-gray-600">
                Local Processing:
              </p>
              <p className="mt-1 text-lg text-gray-500">
                Data processing happens on the user's device, with only
                anonymized features sent to the server.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="w-full font-semibold text-lg text-gray-600">
                Anonymization:
              </p>
              <p className="mt-1 text-lg text-gray-500">
                Remove any potentially identifying information from the content analysis.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
