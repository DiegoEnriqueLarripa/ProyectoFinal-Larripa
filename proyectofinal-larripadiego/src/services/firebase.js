import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6umXeaOmbuZyOq49PKn5Bgp...",
  authDomain: "cursoreactlarripa.firebaseapp.com",
  projectId: "cursoreactlarripa",
  storageBucket: "cursoreactlarripa.appspot.com",
  messagingSenderId: "652186956698",
  appId: "1:652186956698:web:2fb7f9816a71e8...",
  measurementId: "G-GMWRLPG09W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);