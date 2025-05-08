import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import AddProjectPage from "../pages/admin/AddProjectPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "add-project", element: <AddProjectPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);
export default router;
