// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAwRtQKWengNId9jznac7VDnNQ5ImoGK0M",
    authDomain: "projet-jeux-olympiques-paris.firebaseapp.com",
    projectId: "projet-jeux-olympiques-paris",
    storageBucket: "projet-jeux-olympiques-paris.appspot.com",
    messagingSenderId: "246081429935",
    appId: "1:246081429935:web:59299244dac44869998f5a",
    measurementId: "G-LXQJ6BD5GJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };