// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNzGtxSTJLeUkgz486ycjA1Mgh_p2IWaI",
    authDomain: "dragon-news-db653.firebaseapp.com",
    projectId: "dragon-news-db653",
    storageBucket: "dragon-news-db653.firebasestorage.app",
    messagingSenderId: "335737548481",
    appId: "1:335737548481:web:3669b04b53d330deb6ee40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

 