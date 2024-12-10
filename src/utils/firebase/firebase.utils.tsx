import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  UserInfo,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-gm-B1REnT4x34zX_2EL25lLC1Rb_2xM",
  authDomain: "recipes-app-f6787.firebaseapp.com",
  projectId: "recipes-app-f6787",
  storageBucket: "recipes-app-f6787.firebasestorage.app",
  messagingSenderId: "12601005823",
  appId: "1:12601005823:web:a3dc816d3297bb76661eca",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth: UserInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("Error creating the user", error);
    }
  }

  return userDocRef;
};
