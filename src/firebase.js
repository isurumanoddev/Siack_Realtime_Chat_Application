import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyBXBWpGtgSkYTQxazakbEHJqnty44Clm1E",
  authDomain: "siack-chat-app.firebaseapp.com",
  projectId: "siack-chat-app",
  storageBucket: "siack-chat-app.appspot.com",
  messagingSenderId: "731442893511",
  appId: "1:731442893511:web:e57d5fb0b00a23bd4964e2",
  measurementId: "G-87XXM52C6Y"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);

export const auth = getAuth(app)

export default app;