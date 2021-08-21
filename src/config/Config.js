// Firebase Imports
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const config = {
  apiKey: "AIzaSyDd3ckfvZqCewMCZyKQCBfvQXIzMhz94x8",
  authDomain: "subscription-tracker-fbe51.firebaseapp.com",
  projectId: "subscription-tracker-fbe51",
  storageBucket: "subscription-tracker-fbe51.appspot.com",
  messagingSenderId: "265676006944",
  appId: "1:265676006944:web:9385f92b56a085dca83e45",
  measurementId: "G-17CT16KSHS"
}

// Initialize Firebase
firebase.initializeApp(config)

const auth = firebase.auth()
const db = firebase.firestore()
const projectStorage = firebase.storage()
//   const analytics = firebase.analytics()

export { auth, db, projectStorage }