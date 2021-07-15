'use strict';

// this statement asks the visitor for their name using prompt. And the while loop will keep asking for their name until they do so.

function greeting(){
  let userName = prompt('Hello dear visitor, whats your name?');
  console.log(userName);
  while(!userName){
    alert('Please enter your name');
    userName = prompt('Lets try this again. Whats your name?');
  }
  alert('Hi ' + userName + ' I would like to thank you for visiting my page!');

  alert('Let\'s have a bit of fun ' + userName + ' by playing a guessing game! Please answer with y/n!');
}
greeting();


// this variable will count the number of questions the user guessed correctly.
let correctGuesses = 0;
function serviceQ(){
  let firstQ = prompt('Did i serve in the Military?');
  let firstFont = firstQ.toLowerCase();
  if(firstFont === 'yes' || firstFont === 'y' || firstFont === 'yea'){
    alert('That\'s correct! I served in the US Navy for 8 years');
    correctGuesses++;
  }else if(firstFont === 'no' || firstFont === 'n' || firstFont === 'nah'){
    alert('Sorry that\'s not correct. I did serve in the US Navy for 8 years');
  }else{
    alert('Please answer with a yes or no!');
  }
  console.log(userName, 'answered the first question:' , firstFont);
}
serviceQ();


function workQ(){
  let secondQ = prompt('Did i work in the Aerospace industry?');
  let secondFont = secondQ.toLowerCase();
  if(secondFont === 'yes' || secondFont === 'y' || secondFont === 'yea'){
    alert('That\'s correct! I worked in the Aerospace industry as a Value Stream Manager.');
    correctGuesses++;
  }else if(secondFont === 'no' || secondFont === 'n' || secondFont === 'nah'){
    alert('Sorry that\'s not correct. I did work in the Aerospace industry');
  }else{
    alert('Please answer with a yes or no!');
  }
  console.log(userName, 'answered the second question:' , secondFont);
}
workQ();


function homeQ(){
  let thirdQ = prompt('Do I live in Texas?');
  let thirdFont = thirdQ.toLowerCase();
  if(thirdFont === 'no' || thirdFont === 'n' || thirdFont === 'nah'){
    alert('That\'s correct! I live in Minnesota');
    correctGuesses++;
  }else if(thirdFont === 'yes' || thirdFont === 'y' || thirdFont === 'yea'){
    alert('Sorry that\'s not correct. I never lived in Texas');
  }else{
    alert('Please answer with a yes or no!');
  }
  console.log(userName, 'answered the third question:' , thirdFont);
}
homeQ();


function educationQ(){
  let FourthQ = prompt('Did i graduate from college?');
  let fourthFont = FourthQ.toLowerCase();
  if(fourthFont === 'yes' || fourthFont === 'y' || fourthFont === 'yea'){
    alert('That\'s correct! I graduated from the University of California Irvine');
    correctGuesses++;
  }else if(fourthFont === 'no' || fourthFont === 'n' || fourthFont === 'nah'){
    alert('Sorry that\'s not correct. I graduated from the University of California Irvine');
  }else{
    alert('Please answer with a yes or no!');
  }
  console.log(userName, 'answered the fourth question:' , fourthFont);
}
educationQ();


let fifthQ = prompt('Have i ever been to Japan?');
let fifthFont = fifthQ.toLowerCase();
if(fifthFont === 'yes' || fifthFont === 'y' || fifthFont === 'yea'){
  alert('That\'s correct! I was stationed in Japan for some time while in the Navy');
  correctGuesses++;
}else if(fifthFont === 'no' || fifthFont === 'n' || fifthFont === 'nah'){
  alert('Sorry that\'s not correct. I was stationed in Japan for sometime');
}else{
  alert('Please answer with a yes or no!');
}
console.log(userName, 'answered the fifth question:' , fifthFont);

alert('Well done ' + userName + '!. You guessed ' + correctGuesses + '/5 correct. Thank you for playing this guessing game with me. Welcome to my page ' + userName + '!');
