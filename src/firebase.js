import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyALDKrfZ3FnKLVzkneM7VhACgzzGszSNCg",
  authDomain: "siack-chat-8f59d.firebaseapp.com",
  projectId: "siack-chat-8f59d",
  storageBucket: "siack-chat-8f59d.appspot.com",
  messagingSenderId: "858020065003",
  appId: "1:858020065003:web:4517b2ebde9e9591b098ae",
  measurementId: "G-GG1YLZ24KN"
};



const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider();

export default app;