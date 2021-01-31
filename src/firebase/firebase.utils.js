import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { initialize } from 'workbox-google-analytics';

const config = {
    apiKey: "AIzaSyA1saXMZRz2RnZ5TGuBKYdjFeWsQz4wyic",
    authDomain: "crwn-db-9980e.firebaseapp.com",
    projectId: "crwn-db-9980e",
    storageBucket: "crwn-db-9980e.appspot.com",
    messagingSenderId: "410234162589",
    appId: "1:410234162589:web:2dbe9e5f23fe686633b374",
    measurementId: "G-0S4WB95JJE"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)
    {
      return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists)
    {
      const {displayName, email } = userAuth;
      const createAt = new Date();

      try {
        await userRef.set ({
          displayName, email, createAt, ...additionalData
        }) 

      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;