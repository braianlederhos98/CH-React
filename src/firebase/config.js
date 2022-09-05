// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9zv8ov0szH6litUDvhC9YEO3TBIQhK6s",
  authDomain: "tienda-coder-90819.firebaseapp.com",
  projectId: "tienda-coder-90819",
  storageBucket: "tienda-coder-90819.appspot.com",
  messagingSenderId: "288784678421",
  appId: "1:288784678421:web:6174df18e2a62f1674581c",
  measurementId: "G-92C5HWYD7M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const db = getFirestore(app);
//const analytics = getAnalytics(app);
export default db
