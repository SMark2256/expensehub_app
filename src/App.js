// App.js
import React, { useState, useEffect } from "react";
import db from "./utils/firebaseConfig"; // Importáld a saját Firebase inicializációt és adatforrásodat
import RegistrationForm from "./components/RegistrationForm";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Az adatok lekérése a Firebase Realtime Database-ból
        db.getList("users").then((response) => {
            setData(response.data);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {/* Az alkalmazás többi része, amely használja a letöltött adatokat */}
                    <RegistrationForm data={data} />
                </div>
            )}
        </div>
    );
}

export default App;
