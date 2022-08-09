import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNuxeEECz3CDpdM4hH-fNyvMHg5kKkpGU",
    authDomain: "slack-clone-d3d4a.firebaseapp.com",
    projectId: "slack-clone-d3d4a",
    storageBucket: "slack-clone-d3d4a.appspot.com",
    messagingSenderId: "851239922038",
    appId: "1:851239922038:web:5f7899956aa199d1607257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
