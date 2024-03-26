import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
