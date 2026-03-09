import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Courses from "../pages/Courses";
import { Subscript } from "lucide-react";
import Subscriptions from "../pages/Subscriptions";
import Portfolio from "../pages/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/courses",
        Component: Courses,
      },
      {
        path: "/subscriptions",
        Component: Subscriptions,
      },
      {
        path: "/portfolio",
        Component: Portfolio,
      },
    ],
  },
]);

export default router;
