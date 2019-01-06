/**
 * GAME FUNCTION:
 * Player must guess a number between a min and max
 * Player gets a certain amount of guesses
 * Notify player of guesses remaining
 * Notify player of the correct answer if loose
 * Let player choose to play again
 */

// 1. Game Values
const min = 1;
const max = 10;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const winningNum = getRandomNum(min, max);
let guessesLeft = 3;

// 2. UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// 3. ASSIGN UI MIN AND MAX
minNum.textContent = min;
maxNum.textContent = max;

// Play again Event listener
game.addEventListener('mousedown', (e) => {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// 4. Listen for a "guess"
guessBtn.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);
  console.log(guess);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  // Check if won
  if (guess === winningNum) {
    // Game over won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    // Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game Over - lost
      gameOver(false, `Game over, you lost. The corret number was ${winningNum}`);
    } else {
      // Game Continues - answer wrong
      // Chenge the border
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`Guess is not correct, ${guessesLeft} guesses left`, 'red');
    }
  }
});

// 5. set message
const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
};


// 6. Game over
const gameOver = (won, msg) => {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.style.borderColor = color;
  message.style.color = color;
  guessInput.disabled = true;
  setMessage(msg);

  // Play again
  guessBtn.value = 'Play Again';
  guessBtn.className = 'play-again';
};

