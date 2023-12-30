import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { BusinesRoute, Redirect } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Redirect />
      </Layout>
    ),
    children: [],
  },
  {
    path: "/negocios/crear",
    element: (
      <Layout>
        <BusinesRoute />
      </Layout>
    ),
    children: [],
  },
  {
    path: "/negocios",
    element: (
      <Layout>
        <BusinesRoute />
      </Layout>
    ),
    children: [],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
