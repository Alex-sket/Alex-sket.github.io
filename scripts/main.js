/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
document.querySelector('html').onclick = function() {
    alert('Заебал бля! Хватит щелкать!!');
}*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/anubis.png') {
      myImage.setAttribute ('src','images/ra.png');
    } else {
      myImage.setAttribute ('src','images/anubis.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Здарова, ' + myName; 
  }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Здарова, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }