const registerBtn = document.getElementById('signup').onclick = ((e) => {
    e.preventDefault()

    const username = document.getElementById('name').value
    const password = document.getElementById('password').value
    const re_password = document.getElementById('re_password').value
    const email = document.getElementById('email').value

    if(username.length >= 20 || username.length <= 3) {
        document.getElementById('name').style.borderBottom = "solid red 2px";
        return false
    }

    if(password.length < 6) {
        document.getElementById('password').style.borderBottom = "solid red 2px";
        return false
    }

    if(password !== re_password) {
        document.getElementById('re_password').style.borderBottom = "solid red 2px";
        return false
    }


    firebase.firestore().collection('users').where("username", "==", username)
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.data().username === username) {
                    document.getElementById('name').style.borderBottom = "solid red 2px"
                    return false
                }
            })
        }).catch(error => {
            console.log("Unable to fetch document ", error)
        })

    {
        document.getElementById('signup').setAttribute('hidden', 'true');

        const today = new Date()

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                firebase.firestore().collection('users').doc().set({
                    username: username,
                    email: email,
                    userId: userCredentials.user.uid,
                    created_at: today.getFullYear() + " " + today.getMonth() + 1 + " " + today.getDate()
                })
                swal({
                    title: "Sign Up",
                    text: "You have been successfully registered",
                    icon: "success",
                    button: "Login"
                }).then(function() {
                    window.location.href = "login.html"
                })
            }).catch(error => {
                document.getElementById('email').style.borderBottom = "solid red 2px"
                console.log(error.message);
                document.getElementById('signup').setAttribute('hidden', 'false');
                return false
            })
    }
})

console.log(firebase)