/*welcome button*/
function welcome(){
    let username = prompt("what is your name");
    let message = "Welcome " +username;
    document.getElementById("saywelcome").innerHTML = message;
}
/*darkmode button*/
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

    function comingsoon7() {
    alert("Assignment 7 Will Be Coming Soon");}

    function comingsoon8() {
    alert("Assignment 8 Will Be Coming Soon");}

    function largerNumbers(){
        let num1 = parseInt(prompt("Enter the first number: "));
        let num2 = parseInt(prompt("Enter the first number: "));
        let output = ""
        if (num1 > num2){
            output = num1;
        } else if (num1 == num2){
            output = "The numbers entered are equal";
        } else if (num2 > num1){
            output = num2;
        } else{
        output = "Invalid output";
        }
        document.getElementById("largeNum").innerHTML = output;
    }
 
    function encrypt() {
        let plaintext = prompt ("Enter your plain message:");
        let ciphertext = "";
        plaintext = plaintext.split(" "); 
        for(let i = 0; i < plaintext.length; i = i + 1) { 
            firstletter = ((plaintext[i][0]).replace("", "97")).toUpperCase(); 
            lastletter = (((plaintext[i]).slice(-1)).toUpperCase()).replace("", "j"); 
            ciphertext += "xz" + (plaintext[i]).slice(1, -1) + firstletter + lastletter + "xz " ; 
        }
        document.getElementById("encrypted").innerHTML = ciphertext; 
        alert("Copy this encrypted message and paste on decrypt button! " + ciphertext) 
    }

    function decrypt() { 
        let ciphertext = prompt ("Enter your encrypted message:"); 
        let plaintext = ""; 
        ciphertext = ciphertext.split(" ");  
        for(let i = 0; i < ciphertext.length; i = i + 1) { 
            firstletter = ((ciphertext[i]).slice(-5, -4)).toLowerCase(); 
            lastletter = ((ciphertext[i]).slice(-3, -2)).toLowerCase(); 
            plaintext += firstletter + (ciphertext[i]).slice(2,-7) + lastletter + " "; 
        }
        document.getElementById("decrypted").innerHTML = plaintext; 
    }

    function sortNum() {
        var c = parseInt(prompt("Place a number"));
        var b = parseInt(prompt("Place a number"));
        var a = parseInt(prompt("Place a number"));
    let array = [c, b, a];
    array.sort(function(c, b, a){return b - a});
    alert ("the order from least to greatest is " + array);     
    }

    function thirdAngle () {
    
        let angle1 = parseInt (prompt('Let\'s find the missing angle for a triangle! Enter an angle'));
        let angle2 = parseInt (prompt('Enter a second angle and I\'ll tell you the missing angle!'));
        let totalAngle = angle1 + angle2;
        if (totalAngle < 180){
            let missingAngle = 180 - totalAngle;
    
            return alert ('The missing angle is ' + totalAngle);
        }
        else if (totalAngle > 180){
            return alert('The angles in a triangle add up to 180. The angles you entered are larger than 180!')
        }
        else{
            alert('Please enter valid angles.')
        }
    }

    function centuryFromYear() {
        let userYear = prompt ('Want to know what century any year is in? Enter a year!', '2020');
        let century = 0;
        century = Math.floor(userYear/100+1);
            if (toString(century)[-1] == 1) /*&& toString(century)[-1] !=11)*/{ 
               century = toString(century) + 'st'
            }
            return alert ('The year you entered is in the century of ' + century);
}

