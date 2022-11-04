// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCTIpj-lyY4MO1Evuh5JNOggjr1K3KnTcU",
  authDomain: "puredrop-3ea2f.firebaseapp.com",
  projectId: "puredrop-3ea2f",
  storageBucket: "puredrop-3ea2f.appspot.com",
  messagingSenderId: "914062727516",
  appId: "1:914062727516:web:af9cc9fdbb6309505dc999",
  measurementId: "G-4D0QGJC096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authenticatin = getAuth(app);