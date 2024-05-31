import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBO9mzSWFhta-1vwYmCpwUKHhVG13I77nA",
  authDomain: "thedojosite-5d67d.firebaseapp.com",
  projectId: "thedojosite-5d67d",
  storageBucket: "thedojosite-5d67d.appspot.com",
  messagingSenderId: "205818619308",
  appId: "1:205818619308:web:1f96235545ae5072e8c609"
};

  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth,projectStorage, timestamp }