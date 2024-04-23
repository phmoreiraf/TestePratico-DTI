import React from "react";
import { createRoot } from "react-dom";
import App from "./App.js";

const root = createRoot(document.getElementById("root"));

// Renderiza o aplicativo dentro de <React.StrictMode>
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
