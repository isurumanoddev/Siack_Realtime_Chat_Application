import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBWKYp_PDYNoGRKVQaTOLEgIfXm83UPjtE",
  authDomain: "siack-76ccc.firebaseapp.com",
  projectId: "siack-76ccc",
  storageBucket: "siack-76ccc.appspot.com",
  messagingSenderId: "255774286202",
  appId: "1:255774286202:web:2e0420785e86ef10a0b6c3",
  measurementId: "G-FEB6GD9NVV"
};
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider();

export default app;