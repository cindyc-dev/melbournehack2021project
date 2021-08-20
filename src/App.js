import './App.css';

// Import Components
import React from 'react'
import Header from './Header'
import Summary from './summary/Summary'
import SearchArea from './search-area/SearchArea';
import Navbar from './Navbar'

// Firebase Imports
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'


// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyDd3ckfvZqCewMCZyKQCBfvQXIzMhz94x8",
//     authDomain: "subscription-tracker-fbe51.firebaseapp.com",
//     projectId: "subscription-tracker-fbe51",
//     storageBucket: "subscription-tracker-fbe51.appspot.com",
//     messagingSenderId: "265676006944",
//     appId: "1:265676006944:web:9385f92b56a085dca83e45",
//     measurementId: "G-17CT16KSHS"
//   }

//   // Initialize Firebase
  
//   const auth = firebase.auth();
//   const firestore = firebase.firestore();
//   const analytics = firebase.analytics();

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider()
//     auth.signInWithPopup(provider)
//   }
// }

// function SignOut() {
//   return auth.currentUser && (

//     <button onClick{() => auth.signOut()}>Sign Out</button>
//   )
// }

export default function App() {

  // const [user] = useAuthState(auth)

  return (
    <div className="App">
      <Header />
      <SearchArea />
      <Summary />
      <Navbar />
      
    </div>
  );
}
