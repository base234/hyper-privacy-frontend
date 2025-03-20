import { createBrowserRouter } from "react-router-dom";

import Home from "./views/Home";
import ContentAnalysis from "./views/ContentAnalysis";
import HowItWorks from "./views/HowItWorks";
import Error404 from "./views/Error404";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/content-analysis",
      element: <ContentAnalysis />,
    },
    {
      path: "/how-it-works",
      element: <HowItWorks />,
    },
    {
      path: "*",
      children: [{ path: "*", element: <Error404 /> }],
    },
]);

export default router;
