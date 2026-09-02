import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCuloMqKLY4dw0rohfwY6oITDGX4NFHOy8",
  authDomain: "agchs-school-website.firebaseapp.com",
  databaseURL: "https://agchs-school-website-default-rtdb.firebaseio.com",
  projectId: "agchs-school-website",
  storageBucket: "agchs-school-website.firebasestorage.app",
  messagingSenderId: "1068368087579",
  appId: "1:1068368087579:web:d6a1957249e5dfb217c6be"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
