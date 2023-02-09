import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQY_cpxvHJHj8_MeLwamqO8Nc_vHDSgpk',
  authDomain: 'next-chatgpt.firebaseapp.com',
  projectId: 'next-chatgpt',
  storageBucket: 'next-chatgpt.appspot.com',
  messagingSenderId: '438829256458',
  appId: '1:438829256458:web:b2599262c825a3ca1d74f3',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
