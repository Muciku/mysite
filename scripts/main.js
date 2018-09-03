var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
var myImage = document.querySelector('img');
var image2= 'images/pic2.jpg';
var image3= 'images/pic3.jpg';

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === image2) {
      myImage.setAttribute ('src',image3);
    } else {
      myImage.setAttribute ('src',image2);
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

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

  myButton.onclick = function() {
    setUserName();
  }

  function validateForm() {
    var firstname = document.forms["myForm"]["firstname"].value;
    var lastname = document.forms["myForm"]["lastname"].value;
    if (firstname == "") {
        alert("Name must be filled out");
        return false;
    }

    if (lastname == ""){
      alert("lastname must be filled out");
      return false;
    }
}

