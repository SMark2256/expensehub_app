import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import { initializeApp } from "firebase/app"; // Firebase inicializálása
import { getAnalytics } from "firebase/analytics"; // Firebase Analytics inicializálása

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebaseConfig from "./utils/firebaseConfig"; // Firebase konfiguráció importálása

const app = initializeApp(firebaseConfig, "expensehub"); // Firebase inicializálása a konfigurációval
const analytics = getAnalytics(app); // Firebase Analytics inicializálása

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
