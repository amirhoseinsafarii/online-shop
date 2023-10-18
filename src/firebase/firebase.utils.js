import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAi5woBPhRmXP5VrSJh_p3oWOdRMxZSpok",

  authDomain: "crwn-db-b950b.firebaseapp.com",

  projectId: "crwn-db-b950b",

  storageBucket: "crwn-db-b950b.appspot.com",

  messagingSenderId: "107911811959",

  appId: "1:107911811959:web:7dd04a1419f88112d28772",

  measurementId: "G-WMTBWPT0SC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;