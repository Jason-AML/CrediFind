import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7Ul3Bvim86Y90vPy49mr2hpfV1ekjy18",
  authDomain: "credifind-8f23e.firebaseapp.com",
  projectId: "credifind-8f23e",
  storageBucket: "credifind-8f23e.firebasestorage.app",
  messagingSenderId: "739721521867",
  appId: "1:739721521867:web:68404c94ee43865125c94e",
  measurementId: "G-5LPBRQ6P23",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
