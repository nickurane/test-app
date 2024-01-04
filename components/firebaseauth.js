// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgZjb6AjGmwOIfGiSrWOK2RT_Lkf278-I",
  authDomain: "quiz-app-b940e.firebaseapp.com",
  projectId: "quiz-app-b940e",
  storageBucket: "quiz-app-b940e.appspot.com",
  messagingSenderId: "847407720920",
  appId: "1:847407720920:web:bde1132d93fcef59d62aad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export {auth};

