import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDBuvG9nL__RFaPefBye3h29E_biDx5Rfg",
    authDomain: "restaurantapp-357dd.firebaseapp.com",
    databaseURL: "https://restaurantapp-357dd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "restaurantapp-357dd",
    storageBucket: "restaurantapp-357dd.appspot.com",
    messagingSenderId: "448344459906",
    appId: "1:448344459906:web:5249ee8016f721ccd7c29b"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };