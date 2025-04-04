import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";
import router from "./router";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
