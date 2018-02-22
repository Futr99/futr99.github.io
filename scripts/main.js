document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/avatar,jpg') {
      myImage.setAttribute ('src','images/avatar.jpg');
    } else {
      myImage.setAttribute ('src','images/URImage.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Stone Tree is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Stone Tree is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
