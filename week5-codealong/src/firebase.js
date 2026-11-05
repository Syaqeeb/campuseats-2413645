import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
// Step 1: connect the app to YOUR Firebase project (values in .env.local).
const firebaseConfig = {
  apiKey: "AIzaSyCMCHxDwO4LE6lVgQLe4K7T2vuRlJbRB4M",
  authDomain: "campuseats-2413645-d8244.firebaseapp.com",
  projectId: "campuseats-2413645-d8244",
  storageBucket: "campuseats-2413645-d8244.firebasestorage.app",
  messagingSenderId: "96158965274",
  appId: "1:96158965274:web:c3708bb1032f40caef3ba3",
};
export const auth = getAuth(app);
if (import.meta.env.VITE_USE_EMULATORS === "true") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
}
