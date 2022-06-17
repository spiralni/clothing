// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'

import {
  doc,
  getDoc,
  getFirestore,
  setDoc
} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "INPUT HERE YOUR OWN API KE",
  authDomain: "clothing-db-40e8e.firebaseapp.com",
  projectId: "clothing-db-40e8e",
  storageBucket: "clothing-db-40e8e.appspot.com",
  messagingSenderId: "625398278146",
  appId: "1:625398278146:web:5fe0685725a855b40b9f1b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

const db = getFirestore()

export const createUserDocFromAuth = async (userAuth) => {
  // first get the ref to the document
  // From my users collection, get the document ref with id = userAuth.ui
  const docRef = doc(db, 'users', userAuth.uid)

  // get document content or data (if the document exists)
  const userSnapshot = await getDoc(docRef)

  if (!userSnapshot.exists())
  {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      // try to save the document to the collection
      await setDoc(docRef, { 
        displayName, 
        email, 
        createdAt
      })

    } catch (error) {
      console.error(`error creating the user: ${error}`)
    }
  }

  return docRef
}