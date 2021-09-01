import firebase from 'firebase/app'
import 'firebase/auth'


export const auth = firebase.initializeApp({
  apiKey: "AIzaSyB1YquE6sZxiY5gWL94OLLxEDd22sXRAfQ",
  authDomain: "asp-ads.firebaseapp.com",
  databaseURL: "https://asp-ads.firebaseio.com",
  projectId: "asp-ads",
  storageBucket: "asp-ads.appspot.com",
  messagingSenderId: "252025369069",
  appId: "1:252025369069:web:c3f05a1e640765adf577e4"
}).auth()