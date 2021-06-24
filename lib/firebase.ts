import 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import firebase from 'firebase/app'

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKYE,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  DatabaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
})

export const db = firebaseApp.firestore()
export const auth = firebase.auth()
