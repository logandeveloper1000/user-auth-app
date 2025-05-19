// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD54kGOh-xLMeAh_RX5bu8TRMZliNhOB4A",
  authDomain: "portfolio-logandeveloper.firebaseapp.com",
  projectId: "portfolio-logandeveloper",
  storageBucket: "portfolio-logandeveloper.firebasestorage.app",
  messagingSenderId: "546326089695",
  appId: "1:546326089695:web:5a638475553621ee96fe6a",
  measurementId: "G-WVBMG7XF6F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
