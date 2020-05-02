'use strict';
alert("Welcome to our webpage!!!");

var str = window.prompt(" Enter your name ");
// document.write(" Welcome " + str );
var welcome = "Welcome " + str;
document.getElementById("haneen").innerHTML = welcome;

window.confirm("you visited our website bacuase you like traveling?");
if (confirm("Press a button!")) {
    alert("You pressed OK!");
  } else {
    alert("You pressed Cancel!");
  }

  function myFunction() {
    document.getElementById("here").style.color = "pink";
  }

  function userChoice(){
      var userChoice = prompt('where would you like to travel? New York City or London')
      var item = '';
     while(userChoice !== 'New York City' && userChoice !== 'London'){
         userChoice = prompt('where would you like to travel? New York City or London');
     }
     var travelersNum =prompt('how many people wants to travel there?');
      for (var i =0; i<travelersNum; i++) {
      if(userChoice === 'New York City') {
          item = item + '<img src="https://i.pinimg.com/originals/d0/c3/9c/d0c39c06a0b0f590ea7037a9d8b4abcb.jpg">';
         // document.write('<p><img src="https://treknova.com/travel-advice/wp-content/uploads/2019/08/nyc-1.jpg"</p>');
    
     }else if (userChoice === 'London') {
         item = item + '<img src="https://i.etsystatic.com/19870296/r/il/f7a3f7/1998370004/il_570xN.1998370004_m2d2.jpg">';
         // document.write('<p><img src ="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"</p>');
        
          document.getElementById("tickets");
      }

     }
    
     
      return item;
    }
    