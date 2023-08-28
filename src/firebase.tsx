import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import "firebase/auth"
import { getFirestore } from '@firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    // apiKey: process.env["VITE_FIREBASE_KEY"],
    apiKey: import.meta.env["VITE_FIREBASE_KEY"],
    authDomain: import.meta.env['VITE_FIREBASE_DOMAIN'],
    projectId: import.meta.env['VITE_FIREBASE_PROJECT_ID'],
    storageBucket: import.meta.env['VITE_FIREBASE_STORAGE_BUCKET'],
    messagingSenderId: import.meta.env['VITE_FIREBASE_SENDER_ID'],
    appId: import.meta.env['VITE_FIREBASE_APP_ID'],
    measurementId: import.meta.env["VITE_FIREBASE_MEASUREMENT_ID"],
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app);