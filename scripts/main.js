
function welcome(){
    let username = prompt("what is your name");
    let message = "Welcome " +username;
    document.getElementById("saywelcome").innerHTML = message;
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
