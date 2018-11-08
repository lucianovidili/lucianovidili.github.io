/*var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
*/

var myImage = document.querySelector('img');
//var myImage = document.getElementById('image');
var myHeading = document.querySelector('h1');
var myBody = document.querySelector('body');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/googlechrome-icon.png');
      myHeading.textContent = 'Chrome is cooler';
      myBody.style.background = 'white'
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
      myHeading.textContent = 'Mozilla is cool';
      myBody.style.background = 'orange'
    }
}