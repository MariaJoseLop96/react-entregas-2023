import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5hAaSwxT6JjbSA-Qvn0qNkNtQqE_RKyY",
  authDomain: "reactloperfido.firebaseapp.com",
  projectId: "reactloperfido",
  storageBucket: "reactloperfido.appspot.com",
  messagingSenderId: "351967567548",
  appId: "1:351967567548:web:60603bcddcc64fdd597ab9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);
