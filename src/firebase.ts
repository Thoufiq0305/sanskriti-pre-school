// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBadJIL3vrVI7VkCVT4wF59Rdn7TVo_JhU",
  authDomain: "thoufiq0305.firebaseapp.com",
  projectId: "thoufiq0305",
  storageBucket: "thoufiq0305.firebasestorage.app",
  messagingSenderId: "611763920141",
  appId: "1:611763920141:web:ac68fd10c38812127b6444",
  measurementId: "G-K9N7G4V0LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);