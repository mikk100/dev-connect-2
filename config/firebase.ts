import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "devconnect-2-c14c2.firebaseapp.com",
  projectId: "devconnect-2-c14c2",
  storageBucket: "devconnect-2-c14c2.firebasestorage.app",
  messagingSenderId: "554878952998",
  appId: "1:554878952998:web:26f258ac1a07cb363a68e7",
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };