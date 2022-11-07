document.querySelector('html').onclick = function() {
  alert("Try clicking the title image! ٩(๑òωó๑)۶");
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/titleimg.png') {
      myImage.setAttribute('src', 'images/titleimg2.png');
    } else {
      myImage.setAttribute('src', 'images/titleimg.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    myName = ""
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome! ' + myName;
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome! ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome! ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
