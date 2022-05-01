// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZcNymx_hyNZTXIi_BvDwysVvsTly9ZyM",
  authDomain: "clothingwarehouse-3ef60.firebaseapp.com",
  projectId: "clothingwarehouse-3ef60",
  storageBucket: "clothingwarehouse-3ef60.appspot.com",
  messagingSenderId: "168731552357",
  appId: "1:168731552357:web:7fda0419b16baf7790b48c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;