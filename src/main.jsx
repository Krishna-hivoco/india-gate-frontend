// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Route.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"; // Import your global styles here

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
    <ToastContainer />
    <img
      height="1"
      width="1"
      style={{ display: "none" }}
      src="https://www.facebook.com/tr?id=788760249856772&ev=PageView&noscript=1"
    />
  </React.StrictMode>
);
