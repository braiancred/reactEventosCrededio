import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVqWO8PIMr3SNpBgrhpQz2Si5F-fTNFKc",
  authDomain: "eventoselectronica.firebaseapp.com",
  projectId: "eventoselectronica",
  storageBucket: "eventoselectronica.appspot.com",
  messagingSenderId: "663419861597",
  appId: "1:663419861597:web:0e20ff698fb2a01e92abb4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);