const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyAsWg_nMgLhFDNV5mvIjkfI1rsHKOuaurc",
    authDomain: "schul-test.firebaseapp.com",
    projectId: "schul-test",
    storageBucket: "schul-test.appspot.com",
    messagingSenderId: "610911074525",
    appId: "1:610911074525:web:c09787136643ede1de8334"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
