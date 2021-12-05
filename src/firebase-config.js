import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDiZbfRSHoBPK_uyFpir-cC-WV68t1GcgQ",

  authDomain: "fir-nine-tu.firebaseapp.com",

  projectId: "fir-nine-tu",

  storageBucket: "fir-nine-tu.appspot.com",

  messagingSenderId: "744848542577",

  appId: "1:744848542577:web:81c242339dc6543ba584d0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
