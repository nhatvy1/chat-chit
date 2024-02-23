import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLdoJ9ZZvomRBh6MgXp0sA_xFmGfPPGOo",
  authDomain: "chatapp-c3d42.firebaseapp.com",
  projectId: "chatapp-c3d42",
  storageBucket: "chatapp-c3d42.appspot.com",
  messagingSenderId: "450286106703",
  appId: "1:450286106703:web:2a5d4b01f2d80b5422523a",
  measurementId: "G-8HKHM4S2JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const auth = getAuth(app)
const db = getFirestore(app)

export { db, auth }
