let randomNumber=Math.floor(Math.random()*100)+1;
const guesses=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount=1;
let resetButton="";
guessField.focus();
function checkGuess(){
    let userGuess=Number(guessField.value);
  
  if(guessCount === 1){
    guesses.textContent="Previous Guesses : ";
  }
  guesses.textContent += userGuess + " ";
  if(userGuess === randomNumber){
    lastResult.textContent ="Congratulation! You guessed it right.🥳";
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
   setGameOver(); 
  }
  else if(guessCount === 10){
    lastResult.textContent ="GAME OVER!!.";
    lastResult.style.backgroundColor = 'red';
   setGameOver(); 
  }else {
    if(userGuess < randomNumber) {
      lastResult.textContent = "Wrong guess, sis!";
      lastResult.style.backgroundColor = 'orange';
      lowOrHi.textContent = 'Last guess was too low. Think high!⚡';
    } else {
      lowOrHi.textContent = 'Last guess was too high. Stay grounded!🌅';
    }
  }
  guessCount++;
  guessField.value="";
  guessField.focus();
}
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Play Again?";
  document.body.append(resetButton);
  resetButton.addEventListener('click',resetGame);
}
function resetGame() {
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  
  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
guessSubmit.addEventListener('click',checkGuess);