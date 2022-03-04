import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAtDm2bB-rXIrUy13ebPuiFvTgY5HnieqU',
  authDomain: 'bachat-a8783.firebaseapp.com',
  projectId: 'bachat-a8783',
  storageBucket: 'bachat-a8783.appspot.com',
  messagingSenderId: '383466932060',
  appId: '1:383466932060:web:5ca9f5d0a75f3636942399',
  measurementId: 'G-N8W6Y81BP4',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const serverTimeStamp = firebase.firestore.FieldValue.serverTimestamp();
export const FieldValue = firebase.firestore.FieldValue;
export const timestampFromDate = firebase.firestore.Timestamp.fromDate;
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
    .then((result) => {
      if (result.additionalUserInfo.isNewUser) {
        firestore.collection('users').doc(result.user.uid).set({
          displayName: result.user.displayName,
          email: result.user.email,
          id: result.user.uid,
        });
      }
    })
    .catch((err) => console.error(err));
};

export default firebase;
