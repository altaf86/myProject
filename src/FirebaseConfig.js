import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA-lnKPVj9liuROX8clxO_wNCC6nujsTZs",
  authDomain: "aajamerescooterparbaithja.firebaseapp.com",
  projectId: "aajamerescooterparbaithja",
  storageBucket: "aajamerescooterparbaithja.appspot.com",
  messagingSenderId: "588314054611",
  appId: "1:588314054611:web:b6b53b4cd48f36f38ba926",
};
export const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
export const db = getFirestore(config);
