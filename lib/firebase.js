import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_hcGxGu3SQmg4n5GwD2wmBGvQi5XLlMw",
  authDomain: "velpla.firebaseapp.com",
  projectId: "velpla",
  storageBucket: "velpla.firebasestorage.app",
  messagingSenderId: "1033985475669",
  appId: "1:1033985475669:web:b1034374e8359d29dc00dc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);