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
  apiKey: "AIzaSyDuyRw1cfVpPXbzr6u96fWpnYArqp11IiU",
  authDomain: "entregaprueba-2f2df.firebaseapp.com",
  projectId: "entregaprueba-2f2df",
  storageBucket: "entregaprueba-2f2df.appspot.com",
  messagingSenderId: "953871384265",
  appId: "1:953871384265:web:eb9bda1eac015b3e491718"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);
