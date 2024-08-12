// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Route.jsx'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './index.css'; // Import your global styles here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
    <ToastContainer/>
  </React.StrictMode>
);