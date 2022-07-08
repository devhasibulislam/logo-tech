// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfBdKhZTNnVSfHkMr954jtDdAM3GWWe70",
    authDomain: "logo-tech.firebaseapp.com",
    projectId: "logo-tech",
    storageBucket: "logo-tech.appspot.com",
    messagingSenderId: "175242138644",
    appId: "1:175242138644:web:5691cbc07f8f5264ccc301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;