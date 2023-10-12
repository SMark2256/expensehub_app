import React from "react";
import ReactDOM from "react-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDz46SaT3U0Klwx9UMOJxRys60vUSkfnpQ",
    authDomain: "expensehub-8508d.firebaseapp.com",
    projectId: "expensehub-8508d",
    storageBucket: "expensehub-8508d.appspot.com",
    messagingSenderId: "628288553379",
    appId: "1:628288553379:web:341793de2dacbdb5045a16",
    measurementId: "G-HB024YT93D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
