/*welcome button*/
function welcome(){
    let username = prompt("what is your name");
    let message = "Welcome " +username;
    document.getElementById("saywelcome").innerHTML = message;
}
/*darkmode button*/
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode"); /* this is used for changing the background to black, connected to my main.css*/
 }

/*find the large number out of the 2*/
    function largerNumbers(){
        let num1 = parseInt(prompt("Enter the first number: "));
        let num2 = parseInt(prompt("Enter the first number: "));
        let output = ""
        if (num1 > num2){ /*if num1 larger then num2, num 1 will be outputed*/
            output = num1;
        } else if (num1 == num2){ /*if both numbers are equal values it will output that the numbers are equal*/
            output = "The numbers entered are equal";
        } else if (num2 > num1){ /*if num2 is larger than num1 it will be outputed*/
            output = num2;
        } else{
        output = "Invalid output";/* if you put letters instead of numbers it will output invalid output*/
        }
        document.getElementById("largeNum").innerHTML = output;
    }
 /*encrypting a message*/
 function encryptor() {
    let plaintext = prompt('Enter plain message')
    let ciphertext = '';
    let wordList = plaintext.split(" ");
    for(let i = 0; i < wordList.length; i = i + 1) {

    if (wordList[i].length >3) {
        ciphertext += ciphertext + wordList[i].slice(1) + wordList[i][0].replace("","aBk") + wordList[i][0] + 'fTc';
    } else {
        ciphertext = ciphertext + wordList[i]
    }
    document.getElementById("encrypted").innerHTML = ciphertext;
}
 }
 
/*decrypts the message*/
    function decrypt() { 
        let ciphertext = prompt ("Paste the message:"); 
        let plaintext = ""; 
        ciphertext = ciphertext.split(" "); /* this splits each word into a string*/ 
        for(let i = 0; i < ciphertext.length; i = i + 1) { /* makes changes to the encrypted message*/
            firstletter = ((ciphertext[i]).slice(-5, -4)).toLowerCase(); /*this take the first letter of your encrypted message turns it lowercase and uses slice to remove the excess*/
            lastletter = ((ciphertext[i]).slice(-3, -2)).toLowerCase();  /*this takes the last letter of your encrypted message also making it lowercase and slicing excess*/
            plaintext += firstletter + (ciphertext[i]).slice(2,-7) + lastletter + " "; 
        }
        document.getElementById("decrypted").innerHTML = plaintext; 
    }
/*sorts numbers from least to greatest*/
    function sortNum() {
        var a = parseInt(prompt("Place a number"));
        var b = parseInt(prompt("Place a number"));
        var c = parseInt(prompt("Place a number"));
    let array = [a, b, c];/* letting var A,B,C to let be array*/
    array.sort(function(c, b, a){return b - a}); /*sorting array in order from least from greatest*/
    output = "the order from least to greatest is " + array;
    document.getElementById("sort#").innerHTML = output;
    }

/*finds the last angle*/
    function thirdAngle() { 
            alert ("Let find the last angle to a triangle, please enter 2 angles." );
        let angle1 = parseInt(prompt("Enter an angle of a triangle")); /*place angle 1*/
        let angle2 = parseInt(prompt("Enter another angle of a triangle ")); /*place angle 2*/
        let totalSum = 0;
            if ((angle1 + angle2) < 180){ /*if the numbers are less than 180 its valid*/
            totalSum = 180 - (angle1 + angle2); /*if it less than 180 it will add both units you put for your angles and subtract it with 180*/
        output = "The angle that is missing is, " + totalSum + "."; 
    }
             else if ((angle1 + angle2) > 180){ 
        output = "Invalid. Enter two angles of a triangle.";/*if it more than 180/*/
    }
        document.getElementById("last angle").innerHTML = output;
}
/*tell your the century*/
    function centuryFromYear() {
        let userYear = prompt ("Want to know what century any year is in? Enter a year!", '2020');
        let century = 0;
        century = Math.floor(userYear/100+1);/*doing the users year divide from 100 and plus 1 will get the users century*/
            output = "The year you entered is in the century of " + century ;/* This will should the message of the century you tried finding before*/
            document.getElementById("year").innerHTML = output; 
}


/*tell you if the number if there positive or negative*/
function signOfProduct () {
    let numSign = parseInt (prompt ("Lets find the sign of the product! Enter a number", "0"));
    let numSign2 =  parseInt (prompt ("Enter another number", "0"));
    let numSign3 =  parseInt (prompt ("Enter one more number", "0"));
      if (numSign * numSign2 * numSign3 > 0) { /* if all your numbers  add up and it's higher than 0 then it will be posititve*/
          output = "The sign for the product of " + numSign + ' ,' + numSign2 +' and ' + numSign3 + ' is positive';
          
      }
      else if (numSign * numSign2 * numSign3 < 0) { /* if your number dont added up to higher than zero than it will be negative*/
          output = "The sign for the product of " + numSign + ' ,' + numSign2 +' and ' + numSign3 + ' is negative';
      }
      else {
          output = "Please enter 3 integers";/* message taelling you to put the three numbers in the alert box*/
      }
      document.getElementById("product").innerHTML = output
  }
/*tell you if a number is even or odd*/
function OddOrEven() {
    let userNum = prompt ("Enter an integer");
    if (userNum % 2 == 1 ){
    output = "That number is odd!";
}
else if(userNum % 2 == 0){
    output = "That number is even!";
}
    else {
        output = "Please enter an integer!";
    }
    document.getElementById("1or2").innerHTML = output
}



