import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDV8gMZJyjIllo13VvvvciIEZkjWmyQHOk",
  authDomain: "auth-ce4ac.firebaseapp.com",
  projectId: "auth-ce4ac",
  storageBucket: "auth-ce4ac.appspot.com",
  messagingSenderId: "705948531050",
  appId: "1:705948531050:web:f05d6e8d9324847c180d13",
  measurementId: "G-TM4ZLG86DD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()
export default app;
