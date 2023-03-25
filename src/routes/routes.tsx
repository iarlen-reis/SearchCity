import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const router = createBrowserRouter([
  {
    // eslint-disable-next-line react/jsx-key
    element: [<Header />, <Footer />],
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
