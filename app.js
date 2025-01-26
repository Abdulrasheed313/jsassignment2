var name = "Abdul Rasheed";

alert(`Hi! ${name}`)

var multi = +prompt("Enter Your Number");
 var x =  1;


 document.write(`${multi} x ${x} = ${multi}  <br>
    ${multi} x ${++x} = ${multi  * x} <br>
    ${multi} x ${++x} = ${multi  * x}  <br>
    ${multi} x ${++x} = ${multi  * x}  <br>
    ${multi} x ${++x} = ${multi  * x}  <br>
    ${multi} x ${++x} = ${multi  * x}  <br>
    ${multi} x ${++x} = ${multi  * x}  <br>
    ${multi} x ${++x} = ${multi  * x}  <br>
    ${multi} x ${++x} = ${multi  * x}  <br>
    ${multi} x ${++x} = ${multi  * x}  <br>
    `)


var city = prompt("Enter Your city name");


if(city == "karachi"){
    document.write( `Welcome in ${city}   `)
}else if(city == "lahore"){
    document.write( `Welcome in ${city}   `)
}else if(city == "islamabad"){
    document.write( `Welcome in ${city}   `)
}else{
    alert(`Enter Ciyt Name, karachi or lahore or islamabad `)
}


var gender = prompt("Enter Your Gender");

if(gender == "male"){
    alert(`Good Morning Sir`)
}else if(gender == "Female"){
    alert(`Good Morning Mam`)
}

var tar = prompt("Enter Your Trafic Signal Color And Get Message");

if(tar == "red"){
    document.write(`
        <table border="">
        <tr>
        <th>Signal</th>
         <th>Message</th>
        </tr>
         <tr>
        <td>${tar}</td>
         <td>Vehicles Must Shop</td>
        </tr>
        </table>
        `)
}else if(tar == "yellow"){
    document.write(`
        <table border="">
        <tr>
        <th>Signal</th>
         <th>Message</th>
        </tr>
         <tr>
        <td>${tar}</td>
         <td>Vehicles Should Get Ready to Go</td>
        </tr>
        </table>
        `)
}else if(tar == "green"){
    document.write(`
        <table border="">
        <tr>
        <th>Signal</th>
         <th>Message</th>
        </tr>
         <tr>
        <td>${tar}</td>
         <td>Vehicles Can Move Now</td>
        </tr>
        </table>
        `)
}else{
    document.write(`Write Correct Color`)
}

var age = 20;

var getage = +prompt("Enter your age Between 1 to 25");

if(getage == age){
    alert(`Correct Our ${age} and you Select ${getage}`)
}
else if(getage > age || getage < age   ){
    alert(`Your Are Less Age`)
}

var fuel = 10;

var Currentfuel = +prompt("Enter Your Fuel");

if(fuel >= Currentfuel){
    alert(`No NEED TO REFILL`)
} 
else if(fuel < Currentfuel){
    alert(`NEED TO REFILL`)
}

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
alert("car is smaller than cat");
}


var english = +prompt("English");
var urdu = +prompt("Urdu");
var Maths = +prompt("Maths");


var total = english + urdu + Maths;
var marks = 300;
var optain;
var grade;
var remarks;

if(total >= 80){
    document.write(`
        
        <table border="">
        <tr>
        <th>Percentage</th>
        <th>Grade</th>
        <th>Remarks</th>
        </tr>
        <tr>
        <td>${optain =  total  / marks * 100}</td>
        <td>${grade = "A-One"}</td>
        <td>${remarks = "Excellent"}</td>
        </tr>
        </table>
        `)
  
}
else if (total >= 70){
    `
      <table border="">
    <tr>
    <th>Percentage</th>
    <th>Grade</th>
    <th>Remarks</th>
    </tr>
    <tr>
    <td>${optain =  total  / marks * 100}</td>
    <td>${grade = "A"}</td>
    <td>${remarks = "Good"}</td>
    </tr>
    </table>
    ` 
}else if (total >= 60){
    `
      <table border="">
    <tr>
    <th>Percentage</th>
    <th>Grade</th>
    <th>Remarks</th>
    </tr>
    <tr>
    <td>${optain =  total  / marks * 100}</td>
    <td>${grade = "B"}</td>
    <td>${remarks = "You Need To Improve"}</td>
    </tr>
    </table>
    ` 
}else if (total <= 60){
    `
      <table border="">
    <tr>
    <th>Percentage</th>
    <th>Grade</th>
    <th>Remarks</th>
    </tr>
    <tr>
    <td>${optain =  total  / marks * 100}</td>
    <td>${grade = "Fail"}</td>
    <td>${remarks = "Sorry"}</td>
    </tr>
    </table>
    ` 
}


document.write(`<h2>Marks Sheet</h2> <br>
    <p>Total Marks : ${marks}</p><br>
    <p>Marks Optainad : ${total}</p><br>
    <p>Percentage : ${optain}</p><br>
    <p>Grade : ${grade}</p><br>
    <p>Remarks : ${remarks}</p><br>
    
    `)

var item1 = 2000;
var item2 = 700;
var shiping = 250;
var total = item1 * 2 + item2 * 5 + shiping;
var discount = 0;

if (total > 2000) {
    discount = (total * 0.1)
}else{
    alert(`${discount} is less then 2000 rupees`)
}


document.write(`Price of T-Shirt is${item1} <br> 
    Quantity of item 1 is 2 <br> 
    Price of USB is ${item2} <br>
    Quantity of item 2 is 5 <br>
    Shipping Charges is ${shiping} <br>
    Total Cost of Your Order is ${total} <br>
    Discount ${discount}<br>
    Pay ${ total - discount}
    `)


var guss = 5;

var inp = +prompt("Enter Your GUESS NUMBER");

if(inp == 5){
    document.write(`Your Guess Number ${inp} is Correct`)
}else if(inp == 4){
    document.write(`Your Guess Number ${inp} is Close `) 
}else if(inp == 6){
    document.write(`Your Guess Number ${inp} is Close `) 
}


var die = 3;

var dieinput = +prompt("Enter Number");

if(dieinput % 3 === 0){
alert(`This Number is Divigible 3`)
}else{
    alert(`This Number is not Divigible 3`)  
}
var die = 3;

var dieinput = +prompt("Enter Number");

if(dieinput % 3 === 0){
alert(`This Number is Divigible 3`)
}else{
    alert(`This Number is not Divigible 3`)  
}

var team1 = prompt("Enter Your Team Name");
var one = +prompt("Enter Scrore");

var team2 = prompt("Enter Your Team Name");
var tow = +prompt("Enter Scrore");


if(one > tow ){
alert(`${team1} won`)
}else if(tow > one){
alert(`${team2} won`)   
}

var string = "paskitan"

alert(` ${string} is a ${typeof(string)}`);

var num= 92;

alert(` ${num} is a ${typeof(num)}`);

var tr= true;

alert(` ${tr} is a ${typeof(tr)}`);


var weatherodd = +prompt("Enter Number");

if(weatherodd % 2 === 0){
alert(`Then number is even`)
}else{
    alert(`the number is odd`)  
}


var temp = +prompt("Write a temperature in 10 to 40")

if(temp <= 10){
    document.write(`“OMG! Today’s weather is so Cool.”`)
}else if(temp <= 20){
    document.write(`“Today’s Weather is cool.”`)
}else if(temp <= 30){
    document.write(`“The Weather today is Normal.”`)
}else if(temp <= 40){
    document.write(`“It is too hot outside.”`)
}

var cal1 = +prompt("Enter Number one")
var cal2 = +prompt("Enter Number two")
var opr = prompt("Enter Number opration exp: +, *, /, -");


if (opr == "+"  ){
    document.write(`<h1>Result Us: ${cal1 + cal2} </h1>`)
}else if (opr == "/" ){
    document.write(`<h1>Result Us: ${cal1 / cal2} </h1>`)
}else if (opr == "-" ){
    document.write(`<h1>Result Us: ${cal1 - cal2} </h1>`)
}
else if (opr == "*" ){
    document.write(`<h1>Result Us:</h1> ${cal1 * cal2} </h1>`)
}else{
    alert(`must Write in exp: +, *, /, -`);
}

var monday = "monday";
var Tuesday = "Tuesday";
var wednesday = "wednesday";
var thursday = "thursday";
var friday = "friday";
var saturday = "saturday";
var sunday = "sunday";

// var weekday = monday + Tuesday + wednesday + thursday + friday; 


var week = prompt("Enter day name");

if(week == monday || week == Tuesday || week == wednesday || week == thursday || week || friday){
    document.write(`“It’s a week day”.`)
}else if(week == saturday){
    document.write(`“It’s a weekend”.`)
}else if(week == sunday){
    document.write(`“Yay! It’s a holiday”.`)
}


var score = 50;
var inpscore = +prompt("Enter Your score");

if(inpscore > 50){
    document.write(`You are passed.`)
}else{
    document.write(`Try Again.`)

}





var greter1 = +prompt("Enter Your number");
var greter2 = 10;


if(greter1 > greter2){
    document.write(`"The greater
number of ${greter1} and ${greter2} is 10.").`)
}


var english = "es" ;
var urdu = "ur" ;
var hindi = "hin" ;


var lang = prompt("Enter Your language Code");


if(lang == urdu || lang == english || lang || hindi ){
  alert(`Hello World`)
}


var puzel1 = +prompt("Enter Number");
var puzel2 = prompt("Enter name");


alert(`${puzel1} ${puzel2}`);



//////////////////////12 13 file

var diesinput = +prompt("Enter Number");

if(diesinput % 3 === 0){
alert(`This Number is Divigible 3`)
}else{
    alert(`This Number is not Divigible 3`)  
}

var odd = +prompt("Enter Number");

if(odd % 2 === 0){
alert(`Then number is even`)
}else{
    alert(`the number is odd`)  
}


var age = +prompt("Enter your Age");


if(age > 18){
    alert(`${age} is "Old enough",`)
}else{
    alert(`${age} is "Too young".`)
  
}

var ras = "Abdul Rasheed";
var greet = prompt("Enter Your Name");

if(ras == greet){
    alert(`${ras} have a nice day`);
}else{
    alert(`Some Thing Rong`)
}

var weatherodd = +prompt("Enter Number");

if(weatherodd % 2 === 0){
alert(`Then number is even`)
}else{
    alert(`the number is odd`)  
}


var check = prompt('Check Uppercase, lowecase, or Number');

if(check == A || check == Z){
    document.write(`${check}  is an UpperCase character`);
}
else if(check == a || check == z){
    document.write(`${check}  is an Lowercase character`);
}
else {
    document.write(`${check}  is an Number character`);
}


var cal1 = +prompt("Enter Number one")
var cal2 = +prompt("Enter Number two")
var opr = prompt("Enter Number opration exp: +, *, /, -");


if (opr == "+"  ){
    document.write(`<h1>Result Us: ${cal1 + cal2} </h1>`)
}else if (opr == "/" ){
    document.write(`<h1>Result Us: ${cal1 / cal2} </h1>`)
}else if (opr == "-" ){
    document.write(`<h1>Result Us: ${cal1 - cal2} </h1>`)
}
else if (opr == "*" ){
    document.write(`<h1>Result Us:</h1> ${cal1 * cal2} </h1>`)
}else{
    alert(`must Write in exp: +, *, /, -`);
}


var time = +prompt(`Enter Your Time and `);

if(time >= 0 && time < 1200){
    document.write(`Good Morning`);
}else if(time >= 1200 && time < 1700){
    document.write(`Good Afternoon`);
}else if(time >= 1700 && time < 2100){
    document.write(`Good Evening`);
}else if(time >= 2100 && time <= 2359){
    document.write(`Good Night`);
}


var year = +prompt("Enter Yaer YYYY");

if(year % 4 === 0){
alert(`whether it is a leap year`)
}else{
    alert(`whether is a Not leap year`)  
}


var pass = "123456789";

var passinp = prompt("Enter Your Password");

if(passinp == ""){
    alert(`Enter Your Password First`);
}else if(passinp == pass){
    alert(`Your Password is correct`);
}else{
    alert(`Your Password is Not correct`);
}


var ali = "ali";

var nameinp = prompt("Enter Your Name");

if(ali == nameinp){
    document.write(`Hello ${ali}`)
}else{
    document.write(`Your Are Not ${ali}`)
}


var greeting;
var hour = 13;
if (hour < 18) {
greeting = alert("Good day"); 
}
else{
greeting = alert("Good evening");
}

var num1 = +prompt("Enter the first integer:");
var num2 = +prompt("Enter the second integer:");

// Check if the two numbers are equal
if (num1 == num2) {
    alert("The two integers are equal.");
} else if (num1 > num2 || num2 > num1){
    // Determine and display the larger number
   
    alert("The two integers are large.");
}


var userTime = +prompt(`Enter Your Time `);

if(userTime >= 6 && userTime < 9 ){
    document.write(`Breakfast is served.`);
}else if(userTime >= 11 && userTime < 1){
    document.write(`"Time for lunch."`);
}else if(userTime >= 5 && userTime < 8){
    document.write(`It's dinner
time.`);
}else {
    document.write(`Sorry, you'll have to
wait,`);
}


var typ = prompt("See Type")

alert(typeof(typ));


var ty = 8;

var tyinp = +prompt("Enter Your Number");

if(ty == tyinp){
    alert(`${ty} is equal to ${tyinp}`)
}else{
    alert(`${ty} is Not equal to ${tyinp}`)
}


var month = +prompt("Find Month");


if(month == 1){
alert("january");

}else if(month == 2){
    alert("Februaryy");
}else if(month == 3){
    alert("March");
}else if(month == 4){
    alert("Aprial");
}else if(month == 5){
    alert("May");
}else if(month == 6){
    alert("June");
}else if(month == 7){
    alert("July");
}else if(month == 8){
    alert("Augest");
}else if(month == 9){
    alert("Sep");
}else if(month == 10){
    alert("Oct");
}else if(month == 11){
    alert("Nov");
}else if(month == 12){
    alert("Dec");
}

var age = +prompt("Enter your Age");


if(age > 18){
    alert(`${age} is "Old enough",`)
}else{
    alert(`${age} is "Too young".`)
  
}