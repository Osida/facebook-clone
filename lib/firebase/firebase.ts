import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

export const firebase = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "facebook-redesign-58d66.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "138823307433",
    appId: "1:138823307433:web:820ceb3c40c35f961dd9b8",
    measurementId: "G-2DGFMJ9BHN"
};

export const createFirebaseConfig = (apikey: string) => {
    return ({
        apiKey: apikey,
        authDomain: "facebook-redesign-58d66.firebaseapp.com",
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: "138823307433",
        appId: "1:138823307433:web:820ceb3c40c35f961dd9b8",
        measurementId: "G-2DGFMJ9BHN"
    })
}

// Initialize Firebase
// Checks if app is already initialized if NOT initialize new app else USE initialized app
const app = !getApps().length ? initializeApp(firebase) : getApp();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export default app;
export {db, storage}