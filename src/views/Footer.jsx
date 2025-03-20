import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto pt-8 pb-5 bg-[#141c25]">
      <div className="max-w-10/12 mx-auto flex flex-col space-y-4">
        <div className="flex mb-16 space-x-4">
          <div className="w-2/5">
            <h1 className="font-medium text-2xl text-white">
              ✽ {import.meta.env.VITE_APP_NAME}
            </h1>
            <p className="mt-2 font-light text-sm text-white tracking-wide">
              {import.meta.env.VITE_APP_SUBHEAD}
            </p>

            <div className="mt-6">
              <NavLink
                to="/content-analysis"
                className="py-2.5 px-6 font-semibold text-sm bg-[#bdf35d] hover:shadow rounded-full"
              >
                Subscribe
              </NavLink>
            </div>
          </div>
          <div className="w-3/5"></div>
        </div>
      </div>

      <hr className="my-4 border-white/10" />
      <div className="max-w-10/12 mx-auto flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-light text-sm text-white tracking-wider">
            &copy; {new Date().getFullYear()} - {import.meta.env.VITE_APP_NAME}{" "}
            - All rights reserved
          </p>
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/base234/hyper-privacy-frontend"
              className="text-white/80 hover:text-white flex items-center space-x-2"
            >
              <i className="fa-brands fa-github fa-fw"></i>
              <span className="tracking-wide">Github</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
