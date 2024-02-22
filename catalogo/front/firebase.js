// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage  } from "firebase/storage";
import dotenv from 'dotenv'
//import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.REACT_APIKEY,
  // authDomain: import.meta.env.REACT_AUTHDOMAIN,
  // projectId: import.meta.env.REACT_PROJECTID,
  // storageBucket: import.meta.env.REACT_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.REACT_MESSAGINGSENDERID,
  // appId: import.meta.env.REACT_APPID
  apiKey: "AIzaSyAcbEf-Q3__Gvy4qzOr2GL3qFr0cWNebvU",
  authDomain: "catalogo-d13a6.firebaseapp.com",
  projectId: "catalogo-d13a6",
  storageBucket: "catalogo-d13a6.appspot.com",
  messagingSenderId: "4484859598",
  appId: "1:4484859598:web:ab194b56d674039d34f29f"
};

const app = initializeApp(firebaseConfig);
//export const storage = getStorage(app)
// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app, import.meta.env.REACT_API_BUCKET);
export default storage;
//const storage = firebase.app().storage(import.meta.env.REACT_API_BUCKET);