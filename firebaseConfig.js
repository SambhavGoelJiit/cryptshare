// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKSUMOhT_Dvfq54Z6KL-hPNNizNvbp0Ds",
  authDomain: "cryptshare-4dbee.firebaseapp.com",
  projectId: "cryptshare-4dbee",
  storageBucket: "cryptshare-4dbee.appspot.com",
  messagingSenderId: "816481191057",
  appId: "1:816481191057:web:29c77e237aa11bc6672b30",
  measurementId: "G-VNYYKQN4VT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
