// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDz46SaT3U0Klwx9UMOJxRys60vUSkfnpQ",
    authDomain: "expensehub-8508d.firebaseapp.com",
    databaseURL: "https://expensehub-8508d.firebaseio.com",
    projectId: "expensehub-8508d",
    storageBucket: "expensehub-8508d.appspot.com",
    messagingSenderId: "628288553379",
    appId: "1:628288553379:web:341793de2dacbdb5045a16",
    measurementId: "G-HB024YT93D",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export default db;
