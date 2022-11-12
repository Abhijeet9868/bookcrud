import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBBhCRLjOeob4mEcOGENfv5os6Mn4Kw8M",
  authDomain: "bookcrud-aa55b.firebaseapp.com",
  projectId: "bookcrud-aa55b",
  storageBucket: "bookcrud-aa55b.appspot.com",
  messagingSenderId: "719583043744",
  appId: "1:719583043744:web:40d79a6b617b68c6f269c5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
