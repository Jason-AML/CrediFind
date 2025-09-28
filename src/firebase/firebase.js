// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Ul3Bvim86Y90vPy49mr2hpfV1ekjy18",
  authDomain: "credifind-8f23e.firebaseapp.com",
  projectId: "credifind-8f23e",
  storageBucket: "credifind-8f23e.firebasestorage.app",
  messagingSenderId: "739721521867",
  appId: "1:739721521867:web:68404c94ee43865125c94e",
  measurementId: "G-5LPBRQ6P23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
