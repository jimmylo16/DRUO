import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { BusinesRoute, Redirect } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Redirect />,
    children: [],
  },
  {
    path: "/negocios/crear",
    element: <BusinesRoute />,
    children: [],
  },
  {
    path: "/negocios",
    element: <BusinesRoute />,
    children: [],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
