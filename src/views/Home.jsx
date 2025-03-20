import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <Fragment>
      <div className="min-h-screen grid grid-cols-1 content-center">
        <div className="max-w-7xl mx-auto flex flex-col">
          <div className="text-center">
            <h1 className="text-7xl">✽</h1>
            <h1 className="font-bold text-5xl tracking-tight">
              {import.meta.env.VITE_APP_NAME}
            </h1>
            <h2 className="mt-4 font-normal text-normal text-gray-700">
              Privacy First Hyper-relevant Ad Recommendation Engine
            </h2>
          </div>
          <div className="mt-10 flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-check-circle fa-fw text-green-400"></i>
              <span className="text-gray-500">
                No personal data collection
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-check-circle fa-fw text-green-400"></i>
              <span className="text-gray-500">
                Automatic{" "}
                <abbr className="cursor-help" title="Personally Identifiable Information">PII</abbr>{" "}
                detection & removal
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-check-circle fa-fw text-green-400"></i>
              <span className="text-gray-500">
                Differential privacy for numeric data
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-check-circle fa-fw text-green-400"></i>
              <span className="text-gray-500">
                Local processing simulation
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-check-circle fa-fw text-green-400"></i>
              <span className="text-gray-500">
                No cross-site tracking
              </span>
            </div>
          </div>
          <div className="mt-16 mx-auto flex items-center justify-center space-x-4">
            <NavLink
              to="/content-analysis"
              className="py-2.5 px-6 font-semibold text-sm bg-[#bdf35d] hover:shadow rounded-full"
            >
              See the Demo
            </NavLink>
            <NavLink
              to="/how-it-works"
              className="py-2.5 px-6 font-semibold text-sm bg-gray-100 hover:bg-gray-200 hover:shadow rounded-full"
            >
              How it Works?
            </NavLink>
          </div>
        </div>
        <div className="mt-20 max-w-7xl mx-auto">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} - {import.meta.env.VITE_APP_NAME}{" "}
            - All rights reserved
          </p>
        </div>
      </div>
    </Fragment>
  );
}
