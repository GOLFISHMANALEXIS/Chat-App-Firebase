import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB-SJTxEzSXDXgrHsTM-jbIGD43Rxl1LrI",
  authDomain: "chat-app-a4a0c.firebaseapp.com",
  projectId: "chat-app-a4a0c",
  storageBucket: "chat-app-a4a0c.appspot.com",
  messagingSenderId: "340021279674",
  appId: "1:340021279674:web:136e7b15aaadae96143b83"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();