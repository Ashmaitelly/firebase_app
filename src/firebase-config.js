import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'fir-app-c81e5.firebaseapp.com',
  projectId: 'fir-app-c81e5',
  storageBucket: 'fir-app-c81e5.appspot.com',
  messagingSenderId: '167903241229',
  appId: '1:167903241229:web:6399eb6a81f0516847a144',
  measurementId: 'G-J0SKDSQX22',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
