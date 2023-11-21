// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrWmLKS1hm_AOy2Xj6z8V2Vf1GXn5F4-A",
  authDomain: "football-united-da3e2.firebaseapp.com",
  projectId: "football-united-da3e2",
  storageBucket: "football-united-da3e2.appspot.com",
  messagingSenderId: "252202990447",
  appId: "1:252202990447:web:098a351995a3d95afb069a",
  measurementId: "G-ZR87FFCV39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);