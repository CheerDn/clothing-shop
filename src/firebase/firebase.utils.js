import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyBSsONRdKxfY5M5FX4gQj2Xq3cInWfKIV0",
  authDomain: "clothing-db-13c33.firebaseapp.com",
  databaseURL: "https://clothing-db-13c33.firebaseio.com",
  projectId: "clothing-db-13c33",
  storageBucket: "clothing-db-13c33.appspot.com",
  messagingSenderId: "263583799892",
  appId: "1:263583799892:web:bc22d03c1403b3971b6bc1",
  measurementId: "G-SPCR059924"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const singInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
