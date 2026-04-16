import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmnQpQiTMGL24SzFQs_JzK1FGQDEwBMFE",
  authDomain: "my-portfolio-b0a3b.firebaseapp.com",
  projectId: "my-portfolio-b0a3b",
  storageBucket: "my-portfolio-b0a3b.firebasestorage.app",
  messagingSenderId: "182667392397",
  appId: "1:182667392397:web:778129543293859d04f9c4",
  measurementId: "G-DL4ZD06XXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics, logEvent };
