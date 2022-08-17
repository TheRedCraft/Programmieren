const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyAdHuYPjsqMtJhJXDzkBJGlJYrvScSNXps",
    authDomain: "fir-testen-bb4f0.firebaseapp.com",
    projectId: "fir-testen-bb4f0",
    storageBucket: "fir-testen-bb4f0.appspot.com",
    messagingSenderId: "668741488154",
    appId: "1:668741488154:web:9f4f842521793160998ba3",
    measurementId: "G-T14V0JTLKH"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code);
        console.log(err.message);
    })
}

const login = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code);
        console.log(err.message);
    })
}

const saveData = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    db.collection('users')
    .add({
        email: email,
        password: password
    })
    .then((docRef) => {
        console.log("Document written with Id: ", docRef.id);
    })
    .catch((error) => {
        console.log("Error adding document: ", error);
    })
}

const readData = () => {
    db.collection('users')
    .get()
    .then((data) => {
        console.log(data.docs.map((item) => {
            return {...item.data(), id: item.id}
        }))
    })
}

const updataData = () => {
    db.collection('users').doc("59n8U3YyOH5SGFISQjoj")
    .update({
        email: 'test12345@email.com',
        password: '56789'
    })
    .then(() => {
        alert('Data Updated')
    })
}

const deleteData = () => {
    db.collection('users').doc("59n8U3YyOH5SGFISQjoj").delete()
    .then(() => {
        alert('Data deleted')
    })
}