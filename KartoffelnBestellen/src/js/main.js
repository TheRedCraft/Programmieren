const rmCheck = document.getElementById("rememberMe");
const myname = document.getElementById("myname");


let zustandAbsage;

function setnein() {
  zustandAbsage = false;
}

function setja() {
  zustandAbsage = true;
}



if(localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    myname.value = localStorage.username;
} else {
    rmCheck.removeAttribute("checked");
    myname.value = "";
}

function lsRememberMe() {
    if(rmCheck.checked && myname.value !== "") {
        localStorage.username = myname.value;
        localStorage.checkbox = rmCheck.value;
    } else {
        localStorage.username = "";
        localStorage.checkbox = "";
    }
}

//Dropdown Menü Anfang

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    return false
  }


//Dropdown Menü Ende 