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

 /*All of my assignment buttons*/
 function comingsoon() {
    alert("Assignment 1 Will Be Coming Soon");}

    function comingsoon2() {
    alert("Assignment 2 Will Be Coming Soon");}

    function comingsoon3() {
     alert("Assignment 3 Will Be Coming Soon");}

    function comingsoon4() {
    alert("Assignment 4 Will Be Coming Soon");}

    function comingsoon5() {
    alert("Assignment 5 Will Be Coming Soon");}

    function comingsoon6() {
    alert("Assignment 6 Will Be Coming Soon");}

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
 
   