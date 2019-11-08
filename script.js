var alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numb =["0","1","2","3","4","5","6","7","8","9"];
var symb = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",";","<",">",".","?","/"];
var whatNumbers = document.getElementById("numb");
var whatSymbol = document.getElementById("symb");
var password = document.getElementById("password");
var gen = document.getElementById("generate");
var copy = document.getElementById("copy");
var things = alfabet.concat(numb,symb);
var finalPswd = things[Math.floor(Math.random()*things.length)];

console.log(finalPswd);
alert("welcome to our random password generator!");

var alfLength = confirm("You understand your password must contain letters?"); 
if ("false"){
    alert("your password must contain Letters. Your page will be refreshed");
    location.reload()
}else {
var symLength = confirm("You understand your password must contain symbols?");
if ("false"){
    alert("Your password must contain Symbols. Your page will be refreshed");
    location.reload()
}else {}
var numLength = confirm("You understand your password must contain numbers?");
if ("false"){
    alert("Your password must contain Numbers. Your page will be reloaded");
    location.reload()
}else{
var numLength = prompt("Please select the amount of characters for your password, between 8 and 128 characters");

var pBox = numLength;
console.log(pBox);

if (pBox <8 || pBox > 128) {
    alert("your character selection must be between 8 and 128. Please refresh the page and try again");
    location.reload()
}else {
function psswd () {
   let psswd ="";
    for (var i=0; i<=pBox; i++) {
        psswd+=finalPswd;
    }
    
    return psswd;
}
}}}
console.log(psswd());

function getPass (){
    
generate.addEventListener("click", psswd);
return password;
} 
console.log (getPass);


