import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import "../src/firebase";
import { DbProvider } from "./contexts/DbContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DbProvider>
        <App />
      </DbProvider>
    </AuthProvider>
  </React.StrictMode>
);
