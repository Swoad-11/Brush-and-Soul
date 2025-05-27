import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-gray-200">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
