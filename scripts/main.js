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

/*find the large number out of the 2*/
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
 /*encrypting a message*/
    function encrypt() {
        let plaintext = prompt ("Type your message:");
        let ciphertext = "";
        plaintext = plaintext.split(" "); 
        for(let i = 0; i < plaintext.length; i = i + 1) { 
            firstletter = ((plaintext[i][0]).replace("", "87")).toUpperCase(); 
            lastletter = (((plaintext[i]).slice(-1)).toUpperCase()).replace("", "d"); 
            ciphertext += "aa" + (plaintext[i]).slice(1, -1) + firstletter + lastletter + "dt " ; 
        }
        document.getElementById("encrypted").innerHTML = ciphertext; 
        alert("Copy this encrypted message and paste on decrypt button! " + ciphertext) 
    }
/*decrypts the message*/
    function decrypt() { 
        let ciphertext = prompt ("Paste the message:"); 
        let plaintext = ""; 
        ciphertext = ciphertext.split(" ");  
        for(let i = 0; i < ciphertext.length; i = i + 1) { 
            firstletter = ((ciphertext[i]).slice(-5, -4)).toLowerCase(); 
            lastletter = ((ciphertext[i]).slice(-3, -2)).toLowerCase(); 
            plaintext += firstletter + (ciphertext[i]).slice(2,-7) + lastletter + " "; 
        }
        document.getElementById("decrypted").innerHTML = plaintext; 
    }
/*sorts numbers from least to greatest*/
    function sortNum() {
        var c = parseInt(prompt("Place a number"));
        var b = parseInt(prompt("Place a number"));
        var a = parseInt(prompt("Place a number"));
    let array = [c, b, a];
    array.sort(function(c, b, a){return b - a});
    alert ("the order from least to greatest is " + array);     
    }
/*finds the last angle*/
    function thirdAngle () {
        let angle1 = parseInt (prompt('Lets find the missing angle for a triangle! Enter an angle'));
        let angle2 = parseInt (prompt('Enter a second angle and I will tell you the missing angle!'));
        let totalAngle = angle1 + angle2;
        if (totalAngle < 180){
            let missingAngle = 180 - totalAngle;
    
            return alert ('The missing angle is ' + totalAngle);
        }
        else if (totalAngle > 180){
            return alert('The angles in a triangle only add up to 180. The angles you entered are larger than 180! Please try again!')
        }
        else{
            alert('Please enter valid angles.')
        }
    }
/*tell your the century*/
    function centuryFromYear() {
        let userYear = prompt ('Want to know what century any year is in? Enter a year!', '2020');
        let century = 0;
        century = Math.floor(userYear/100+1);
            if (toString(century)[-1] == 1) /*&& toString(century)[-1] !=11)*/{ 
               century = toString(century) + 'st'
            }
            return alert ('The year you entered is in the century of ' + century);
}

/*tell you if the number if there positive or negative*/
function signOfProduct () {
    let numSign = parseInt (prompt ('Lets find the sign of the product! Enter a number', '0'));
    let numSign2 =  parseInt (prompt ('Enter another number', '0'));
    let numSign3 =  parseInt (prompt ('Enter one more number', '0'));
      if (numSign * numSign2 * numSign3 > 0) {
          return alert('The sign for the product of ' + numSign + ' ,' + numSign2 +' and ' + numSign3 + ' is positive')
          
      }
      else if (numSign * numSign2 * numSign3 < 0) {
          return alert('The sign for the product of ' + numSign + ' ,' + numSign2 +' and ' + numSign3 + ' is negative')
      }
      else {
          return alert ('Please enter 3 integers')
      }
  }
/*tell you if a number is even or odd*/
function OddOrEven() {
    let userNum = prompt ('Enter an integer');
    if (userNum % 2 == 1 ){
    alert('That number is odd!');
}
else if(userNum % 2 == 0){
    alert ('That number is even!');
}
    else {
        alert ('Please enter an integer!');
    }
}