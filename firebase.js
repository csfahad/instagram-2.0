// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBiOEN27ULlIGslTU0j8pw8aoGIugohzjA',
  authDomain: 'instagram-clone-b5c22.firebaseapp.com',
  projectId: 'instagram-clone-b5c22',
  storageBucket: 'instagram-clone-b5c22.appspot.com',
  messagingSenderId: '519432580143',
  appId: '1:519432580143:web:46e41203c4f316c8e6aada',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
