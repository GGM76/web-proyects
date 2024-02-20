// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage  } from "firebase/storage";
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcbEf-Q3__Gvy4qzOr2GL3qFr0cWNebvU",
  authDomain: "catalogo-d13a6.firebaseapp.com",
  projectId: "catalogo-d13a6",
  storageBucket: "catalogo-d13a6.appspot.com",
  messagingSenderId: "4484859598",
  appId: "1:4484859598:web:ab194b56d674039d34f29f"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);