// src/firebase/FirebaseConfig.jsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmvO6DL9IR1UXWj3xiMYBG-LaCGOejzi8",
  authDomain: "myfirstapp-f8bc7.firebaseapp.com",
  projectId: "myfirstapp-f8bc7",
  storageBucket: "myfirstapp-f8bc7.firebasestorage.app",
  messagingSenderId: "1083276497705",
  appId: "1:1083276497705:web:976801be8cecd2dcc39d38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB,auth}

