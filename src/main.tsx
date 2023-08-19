import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import StateProvider from "./toolkit/StateProvider.tsx";
import { QueryClient, QueryClientProvider } from 'react-query';
import "./Tailwind.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </StateProvider>
  </React.StrictMode>
);
