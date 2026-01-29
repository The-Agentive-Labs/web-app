// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAE8lWyF11RDQBVSn9lSZIm0rWF2BydwAI",
    authDomain: "agentive-rishie.firebaseapp.com",
    projectId: "agentive-rishie",
    storageBucket: "agentive-rishie.firebasestorage.app",
    messagingSenderId: "750762970702",
    appId: "1:750762970702:web:084c37671352b5cbacfd1f",
    measurementId: "G-ZNDPM2YFVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };
