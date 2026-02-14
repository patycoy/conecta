
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from './firebaseConfig.js';

// Initialize Firebase
const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(firebaseApp);

export { db };
