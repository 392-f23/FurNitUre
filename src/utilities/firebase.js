import { useCallback, useEffect, useState } from "react";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, onValue, ref, update, } from "firebase/database";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCs_uRV7vmawtR_9FfYo5sgIOYXWPpGEj0",
  authDomain: "furniture-1f5f7.firebaseapp.com",
  projectId: "furniture-1f5f7",
  storageBucket: "furniture-1f5f7.appspot.com",
  messagingSenderId: "968642591182",
  appId: "1:968642591182:web:46d0694bf9a7de7243139f",
};

let firebase;

if (!getApps().length) {
  firebase = initializeApp(firebaseConfig);
} else {
  firebase = getApp();
}

export const database = getDatabase(firebase);
export const getFirebaseStorage = () => {
  return getStorage(firebase);
};

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback(
    (value) => {
      update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );

  return [updateData, result];
};

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => onAuthStateChanged(getAuth(firebase), setUser), []);

  return [user];
};
