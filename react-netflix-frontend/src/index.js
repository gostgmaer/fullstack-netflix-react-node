import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "./context/AppGlobalContent";
import MotionContainer from "./components/animation/animate/MotionContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
     
      </BrowserRouter></AppProvider>
    <ToastContainer />
  </React.StrictMode>
);
