import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdzkbUaBsW4xbpuzn7MIEGo4od72MiJO8",
  authDomain: "siack-chat.firebaseapp.com",
  projectId: "siack-chat",
  storageBucket: "siack-chat.appspot.com",
  messagingSenderId: "568814121603",
  appId: "1:568814121603:web:62bf26bcb2d75441afa1b6",
  measurementId: "G-FHFGT6ZPL8"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider();

export default app;