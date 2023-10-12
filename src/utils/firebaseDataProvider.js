// firebaseDataProvider.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database"; // Használjuk a Firebase Realtime Database-t
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Használjuk a Firebase Realtime Database inicializációt

const dataProvider = {
    getList: async (resource, params) => {
        const resourceRef = ref(db, resource);
        const snapshot = await get(resourceRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            const records = Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
            }));
            return {
                data: records,
                total: records.length,
            };
        } else {
            return {
                data: [],
                total: 0,
            };
        }
    },
    // Implementáld további műveleteket (getOne, create, update, delete) szükség szerint
};

export default dataProvider;
