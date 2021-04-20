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
    function largerNum(){
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
//encrypt the message of your choice 
 function encrypt(){
    let plaintext = prompt('Enter your Message');
    let ciphertext = "";
    plaintext = plaintext.split(" "); 
    for(let i = 0; i < plaintext.length; i++){
        if(plaintext[i].length >= 2){
            let firstletter = plaintext[i][0]; 
            let secondletter = plaintext[i][1] 
                ciphertext += 'fTc' + (plaintext[i]).slice(1) + 'SsB' + secondletter + firstletter + "7" + ' ' //puts fTc in from of the word then adds SsB to the end of the word and add 7 at the very end of the encryped message
                }
                alert(ciphertext);}
                {
                document.getElementById(encrypt).innerHTML = output 
                // to make this function type in your message open a new tab then go back to the website, then it will show you your entire encrypted message
            }
            }
//decrypts the encrypted message
//got help from kevin to solve this function 
function decrypt(){
    let ciphertext = prompt("Enter your Encrypted Message")
    let decryptedtext = ''; 
    let firstDecryption = ''; 
    let wholetext = ''; 
    
    ciphertext = ciphertext.split(" "); 
    for(let i = 0; i < ciphertext.length; i = i + 1){
        ciphertext[i] = ciphertext[i].replace(/SsB/g, ""); //the g is there to remove all the SsB in the encrtpyed message
        ciphertext[i] = ciphertext[i].replace(/fTc/g, ""); //the g is there to remove all the fTc in the encrtpyed message
        ciphertext[i] = ciphertext[i].replace(/7/g, ""); //the g is there to remove all the 7 in the encrtpyed message
            if(ciphertext[i].length > 2){
    firstDecryption = ciphertext[i].slice(-1);
    wholetext =  (ciphertext[i]).slice(0, -2);
    decryptedtext += firstDecryption + wholetext + ' ';
        }
        else {
            decryptedtext += ciphertext[i][0] + " ";
            }
    }
    alert('Your Message is, ' +  decryptedtext)
    document.getElementById(decrypt).innerHTML = output 
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
    function thirdangle() { 
            alert ("Let find the last angle to a triangle, please enter 2 angles." );
        let a1 = parseInt(prompt("Enter an angle of a triangle")); /*place angle 1*/
        let a2 = parseInt(prompt("Enter another angle of a triangle ")); /*place angle 2*/
        let totalSum = 0;
            if ((a1 + a2) < 180){ /*if the numbers are less than 180 its valid*/
            totalSum = 180 - (a1 + a2); /*if it less than 180 it will add both units you put for your angles and subtract it with 180*/
        output = "The angle that is missing is, " + totalSum + "."; 
    }
             else if ((angle1 + angle2) > 180){ 
        output = "Invalid. Enter two angles of a triangle.";/*if it more than 180/*/
    }
        document.getElementById("3angle").innerHTML = output;
}
/*tell your the century*/
//worked together with kevin and travis also used w3school
    function centuryFromYear() {
        let userYear = prompt ("Want to know what century any year is in? Enter a year!", '2020');
        let century = 0;
        century = Math.floor(userYear/100+1);/*doing the users year divide from 100 and plus 1 will get the users century*/
            output = "The year you entered is in the century of " + century ;/* This will should the message of the century you tried finding before*/
            document.getElementById("year").innerHTML = output; 
}


/*tell you if the number if there positive or negative*/
function signofproduct () {
    let numS = parseInt (prompt ("Lets find the sign of the product! Enter a number", "0"));
    let numS2 =  parseInt (prompt ("Enter another number", "0"));
    let numS3 =  parseInt (prompt ("Enter one more number", "0"));
      if (numSign * numSign2 * numSign3 > 0) { /* if all your numbers  add up and it's higher than 0 then it will be posititve*/
          output = "The sign for the product of " + numSign + ' ,' + numSign2 +' and ' + numSign3 + ' is positive';
          
      }
      else if (numS * numS2 * numSS3 < 0) { /* if your number dont added up to higher than zero than it will be negative*/
          output = "The sign for the product of " + numS + ' ,' + numS2 +' and ' + numS3 + ' is negative';
      }
      else {
          output = "Please enter 3 integers";/* message taelling you to put the three numbers in the alert box*/
      }
      document.getElementById("product").innerHTML = output
  }
/*tell you if a number is even or odd*/
function oddoreven() {
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



