import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDyOFSCDMmDpJDB1JDszD22qUYMSBTtoXY",
    authDomain: "streamlytics-d207e.firebaseapp.com",
    projectId: "streamlytics-d207e",
    storageBucket: "streamlytics-d207e.appspot.com",
    messagingSenderId: "254887754713",
    appId: "1:254887754713:web:0b6cbd2d59f680b7c0f7c8",
})

export const auth = app.auth()
firebase.firestore().settings({ timestampsInSnapshots: true})
export default app