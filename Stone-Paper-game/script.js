const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

//sound 
function playWinSound(value) {
  try {
    if (value === 'win') {
      const winSound = new Audio('win.mp3'); // replace with your actual file path
      winSound.play();
    } else if (value === 'lose') {
      const loseSound = new Audio('gameover.mp3'); // replace with your actual file path
      loseSound.play();
    }
  } catch (err) {
    console.error("Audio error:", err);
  }
}

//reset game function
function resetGame(){
  try {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;
    resultDisplay.textContent = 'Make your choice!';
  } catch (err) {
    console.error("Reset error:", err);
  }
}

function updateScores(value) {
  try {
    if (value === 'player') {
      playerScore++;
      playerScoreDisplay.textContent = `${playerScore}`;
    } else if (value === 'computer') {
      computerScore++;
      computerScoreDisplay.textContent = `${computerScore}`;
    }
    
    // Check for a winner
    if (playerScore === 5) {
      displayMessage('Congratulations! You win the game!');
      playWinSound('win'); // play win sound
      resetGame();
    } else if (computerScore === 5) {
      displayMessage('Sorry, you lose the game!');
      playWinSound('lose'); // play lose sound
      resetGame();
    }
  } catch (err) {
    console.error("Score update error:", err);
  }
}

function displayMessage(message) {
  try {
    resultDisplay.textContent = message;
  } catch (err) {
    console.error("Display message error:", err);
  }
}

let playerChoice; // just declared (not assigned yet)

//computer chose will be generated randomly
function getComputerChoice() {
  try {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  } catch (err) {
    console.error("Computer choice error:", err);
    return 'rock'; // fallback
  }
}

// function to handle selection
function playerSelection(choice) {
  try {
    playerChoice = choice; // update global variable
    console.log("Player chose:", playerChoice);

    const computerChoice = getComputerChoice();
    console.log("Computer chose:", computerChoice);

    if (playerChoice === computerChoice) {
      displayMessage('It\'s a draw!');
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      displayMessage('You win!');
      updateScores('player');
    } else {
      displayMessage('You lose!');
      updateScores('computer');
    }
  } catch (err) {
    console.error("Game logic error:", err);
    displayMessage("Something went wrong. Try again!");
  }
}

// Event listeners with parameters
rockBtn.addEventListener("click", () => playerSelection('rock'));
paperBtn.addEventListener("click", () => playerSelection('paper'));
scissorsBtn.addEventListener("click", () => playerSelection('scissors'));
