

function changeTittle(){
    x=document.getElementById("tittle");
    x.innerHTML="很常用";
}
    function changeFace(){
        element=document.getElementById("face")
        if (element.src.match("face2")){
            element.src="img/face1.gif";
            }
            else{
            element.src="img/face2.jpg";
            }
    }

    function multi(N1,N2){
        var result= N1 * N2;
        return result;
    }

var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

function checkGuess() {
   var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = '猜测记录: ';
        }
    guesses.textContent += userGuess + ' ';
 
    if (userGuess === randomNumber) {
        lastResult.textContent = '恭喜你答对了!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }    
    else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    }    
    else {
        lastResult.textContent = '错误!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = '低了!';
        }
        else if(userGuess > randomNumber) {
        lowOrHi.textContent = '高了!';
        }
    }
   guessCount++;
  guessField.value
}
guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = '新一轮';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}