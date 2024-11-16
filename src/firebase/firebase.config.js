// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACyss6SZTsDr3EA-yGfwYwLJWNkDYQAts",
  authDomain: "dragon-news-f76fa.firebaseapp.com",
  projectId: "dragon-news-f76fa",
  storageBucket: "dragon-news-f76fa.firebasestorage.app",
  messagingSenderId: "306964963137",
  appId: "1:306964963137:web:bb8d798d75110470e68bc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;