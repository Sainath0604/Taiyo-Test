import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import StateProvider from "./toolkit/StateProvider.tsx";
import "./Tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
