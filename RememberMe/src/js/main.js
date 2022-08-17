const rmCheck = document.getElementById("rememberMe");
const emailInput = document.getElementById("email");
const passwortInput = document.getElementById("password");

if(localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.username;
    passwortInput.value = localStorage.password;
} else {
    rmCheck.removeAttribute("checked");
    emailInput.value = "";
    passwortInput.value = "";
}

function lsRememberMe() {
    if(rmCheck.checked && emailInput.value !== "" && passwortInput.value !== "") {
        localStorage.username = emailInput.value;
        localStorage.password = passwortInput.value;
        localStorage.checkbox = rmCheck.value;
    } else {
        localStorage.username = "";
        localStorage.password = "";
        localStorage.checkbox = "";
    }
}