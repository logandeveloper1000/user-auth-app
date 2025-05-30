// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1TWj5WC5yEWYmQCkc8pqx5xvrkhEbN3A",
  authDomain: "logan-portolio.firebaseapp.com",
  projectId: "logan-portolio",
  storageBucket: "logan-portolio.firebasestorage.app",
  messagingSenderId: "254880871321",
  appId: "1:254880871321:web:040bb97bce77b7c34b5908",
  measurementId: "G-4VR49C3620"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
