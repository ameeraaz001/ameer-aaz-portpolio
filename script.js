const texts = [
  "Web Developer",
  "App Developer",
  "Penetration Tester",
  "Graphic Designer",
  "C++ Programmer",
  "Java Programmer"
];

let speed = 100;
const textElement = document.querySelector(".typing-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter(){

  if(charIndex < texts[textIndex].length){

    textElement.textContent += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWriter, speed);

  }
  else{

    setTimeout(eraseText, 1500);

  }

}

function eraseText(){

  if(textElement.textContent.length > 0){

    textElement.textContent = textElement.textContent.slice(0,-1);

    setTimeout(eraseText, 50);

  }
  else{

    textIndex++;

    if(textIndex >= texts.length){
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeWriter, 500);

  }

}

window.onload = typeWriter;