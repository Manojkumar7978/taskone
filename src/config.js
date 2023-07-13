import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAVJAgE1qZMWh9BUszhpa4Hi3k3vL7V_WA",
    authDomain: "hotelapp-7de15.firebaseapp.com",
    projectId: "hotelapp-7de15",
    storageBucket: "hotelapp-7de15.appspot.com",
    messagingSenderId: "983899439657",
    appId: "1:983899439657:web:8ff6e698017dc97aa65238",
    measurementId: "G-Q7STJ09HY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {
    auth, provider
}