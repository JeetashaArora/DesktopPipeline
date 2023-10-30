//Importing required modules
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

//Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyA_wMJlOVEky5jWNvnfm2D3oXhIUNdd3Os",
    authDomain: "sit313-hd-project.firebaseapp.com",
    projectId: "sit313-hd-project",
    storageBucket: "sit313-hd-project.appspot.com",
    messagingSenderId: "385517471562",
    appId: "1:385517471562:web:bae9d6a05630dad0cca3b3"
}
// init firebase
firebase.initializeApp(firebaseConfig)

// initializing the services

//Firestore service
const projectFirestore = firebase.firestore()

//Firebase authentication service
const projectAuth = firebase.auth()

//Firestore storage service
const projectStorage = firebase.storage()


// timestamp
const timestamp = firebase.firestore.Timestamp

//Exporting all the services so that they can be used in other components
export { projectFirestore, projectAuth, timestamp, projectStorage }