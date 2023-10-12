// RegistrationForm.js
import { ref, set } from "firebase/database";
import db from "../utils/firebaseConfig";

const RegistrationForm = () => {
    const usersRef = ref(db, "users");

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // Ellenőrizz validációval, hogy a felhasználónév, email és jelszó helyesek-e

        const newUser = {
            username,
            email,
        };

        // Írd be az új felhasználót a Firebase adatbázisba
        set(ref(usersRef), newUser).then(() => {
            console.log("Felhasználó regisztrálva:", newUser);
            // Itt további műveleteket végezhetsz, pl. átirányítás egy bejelentkezési oldalra
        });
    };

    return (
        <div className="w-full max-w-xs mx-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Felhasználónév
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Felhasználónév"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Email cím"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Jelszó
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Jelszó"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Regisztráció
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
