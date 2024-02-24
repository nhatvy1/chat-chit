import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

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

connectAuthEmulator(auth, 'http://127.0.0.1:9099')
if (location.hostname === "localhost") {
  // Point to the RTDB emulator running on localhost.
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
} 

export { db, auth }
