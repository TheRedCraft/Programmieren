$(document).ready(function () {
    $("#spinner").hide()
})


const registerBtn = document.getElementById("signup").onclick = ((e) => {
    e.preventDefault()
 

    const username = document.getElementById("name").value
    const password = document.getElementById("pass").value
    const re_password = document.getElementById("re_pass").value
    const email = document.getElementById("email").value


    // verify username
    if (username.length >= 20 || username.length <= 3) {
        $("#name").css("border-bottom", "solid red 2px");
        $("#error-name").text("Der Benutzername muss mindestens aus 4 Zeichen und maximal aus 20 Zeichen bestehen.")
        return false
    }


    if (password.length < 6) {
        $("#pass").css("border-bottom", "solid red 2px");
        $("#error-pass").text("Das Passwort muss mindestens aus 6 Zeichen bestehen")
        return false
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        $("#email").css("border-bottom", "solid red 2px")
        $("#error-email").text("Falsches Email- Format")
        return false
    }

    if (password !== re_password) {
        $("#pass").css("border-bottom", "solid red 2px")
        $("#re_pass").css("border-bottom", "solid red 2px")
        $("#error-pass").text("Passwort stimmt nicht überein")
        $("#error-re_pass").text("Passwort stimmt nicht überein")
        return false
    }


    firebase.firestore().collection("users").where("username", "==", username)
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().username === username) {
                $("#name").css("border-bottom", "solid red 2px");
                    $("#error-name").text("Der Benutzername existiert bereits.")
                    return false
            }
        })
        }).catch(error => {
            console.log("Unable to fetch document", error)
        })
    
        firebase.firestore().collection("users").where("email", "==", email)
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().email === email) {
                $("#name").css("border-bottom", "solid red 2px");
                    $("#error-email").text("Diese Email existiert bereits.")
                    return false
            }
        })
        }).catch(error => {
            console.log("Unable to fetch document", error)
        })
    
    {
        $("#signup").hide()
        $("#spinner").show()

        const today = new Date()

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                firebase.firestore().collection("users").doc().set({
                    username: username,
                    email: email,
                    userId: userCredentials.user.uid,
                    created_at: today.getFullYear() + " " + (today.getMonth() +1) + " " + today.getDate()
                })
                eintragIndex = 1;
                firebase.firestore().collection('documents').doc(userCredentials.user.uid).set({
                    eintragIndex: eintragIndex
                }, {merge: true})
                firebase.firestore().collection('documents').doc(userCredentials.user.uid).set({
                    temperature0: 'Status: ok'
                }, {merge: true})
                swal({
                    title: "Konto erstellen",
                    text: "Du wurdest erfolgreich registriert",
                    icon: "success",
                    button: "einloggen"
                }).then(function () {
                    window.location.href = "login.html"
                })
            }).catch(error => {
                $("#email").css("border-bottom", "solid red 2px")
                $("#spinner").hide()
                $("#signup").show()
                return false
        })
    }

})