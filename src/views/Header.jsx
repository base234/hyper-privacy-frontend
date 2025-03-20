import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 py-2.5 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-10/12 mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <NavLink to="/" className="text-lg font-medium">
            ✽ {import.meta.env.VITE_APP_NAME}
          </NavLink>
          <div className="px-3 py-0.5 text-xs text-green-800 bg-green-100 border border-green-200 flex items-center space-x-2 rounded-full">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            <span>Privacy Mode: On</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink to="/content-analysis" className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-4 decoration-dashed decoration-gray-300 hover:decoration-gray-600 cursor-pointer">
            Content Analysis
          </NavLink>
          <NavLink to="/how-it-works" className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-4 decoration-dashed decoration-gray-300 hover:decoration-gray-600 cursor-pointer">
            How it works
          </NavLink>
          <button className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-4 decoration-dashed decoration-gray-300 hover:decoration-gray-600 cursor-pointer">
            <i className="fa-brands fa-github fa-fw mr-1"></i>
            <span>Github</span>
          </button>
        </div>
      </div>
    </header>
  );
}
