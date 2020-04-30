'use strict';
alert("Welcome to our webpage!!!");

var str=window.prompt(" Enter your name ");
// document.write(" Welcome " + str );
var welcome = "Welcome " + str;
document.getElementById("haneen").innerHTML = welcome;

var confirm1 = confirm("are you interested in traveling?")
if(!confirm1){
alert("i hope you get better");
}else{
    alert("thats great");
}
