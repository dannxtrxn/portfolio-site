
function welcome(){

    let username = prompt("What is your name?");    
    let message = "Welcome " + username;
    document.getElementById("saywelcome").innerHTML = message; 
}​​

functions lights(){

    let color = prompt("What color is the light now");

    if (color == "red") {
        console.log("STOP!")
    }
    else if (color == "green"){
        console.log("GO!");
    }
    else if (color == "amber"){
        console.log("Stop if it is safe to do so");
    }
    else {
        console.log("invalid input");
    }
}