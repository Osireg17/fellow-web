// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGvMhFPwedcFA4xhY3gECeQHIQq7VxDaQ",
  authDomain: "fellow-database-1.firebaseapp.com",
  projectId: "fellow-database-1",
  storageBucket: "fellow-database-1.appspot.com",
  messagingSenderId: "96165196004",
  appId: "1:96165196004:web:7050549f8656c507cffcf1",
  measurementId: "G-GRDK7W7YX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)



export const initFirebase = () => {
  return app
}