// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKhFW7OWWVwLouOgj0Zc4M2qzS_OZBPB4",
    authDomain: "car-store-34d66.firebaseapp.com",
    projectId: "car-store-34d66",
    storageBucket: "car-store-34d66.appspot.com",
    messagingSenderId: "885698195083",
    appId: "1:885698195083:web:1de703f9f0145360502e8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;