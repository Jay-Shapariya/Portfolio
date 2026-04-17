import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase safely
let app = null;
let analytics = null;

if (firebaseConfig.apiKey) {
  try {
    app = initializeApp(firebaseConfig);
    analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.warn("Firebase API Key missing. Analytics will be disabled. Check your environment variables.");
}

export { app, analytics, logEvent };
