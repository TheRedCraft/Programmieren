const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyBl80_z86utUYFXCL7HFgTF_mWkuD3Et-k",
    authDomain: "kopfschmerz-protokoll.firebaseapp.com",
    projectId: "kopfschmerz-protokoll",
    storageBucket: "kopfschmerz-protokoll.appspot.com",
    messagingSenderId: "576688951223",
    appId: "1:576688951223:web:0486ab3ee22b7284d66232",
    measurementId: "G-H9PV2YRMZE"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
