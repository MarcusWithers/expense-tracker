import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Create .env for config

const firebaseConfig = {
  apiKey: process.env.DB_API_KEY,
  authDomain: "expenses-tracker-79fb2.firebaseapp.com",
  projectId: "expenses-tracker-79fb2",
  storageBucket: "expenses-tracker-79fb2.appspot.com",
  messagingSenderId: "855251082905",
  appId: "1:855251082905:web:686deef140a2519ea1a208",
  measurementId: "G-E59K159W4M",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
