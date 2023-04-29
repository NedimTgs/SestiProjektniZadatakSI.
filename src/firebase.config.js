import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4095zIM09nsW_iZQveAP6JZMohLY3qdU",
  authDomain: "foodapp-75f49.firebaseapp.com",
  databaseURL: "https://foodapp-75f49-default-rtdb.firebaseio.com",
  projectId: "foodapp-75f49",
  storageBucket: "foodapp-75f49.appspot.com",
  messagingSenderId: "38769415010",
  appId: "1:38769415010:web:7e29e478bdf6fa335b123b"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
