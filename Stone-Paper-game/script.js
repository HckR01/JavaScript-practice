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
      if(value === 'win'){
            const winSound = new Audio('win.mp3'); // replace with your actual file path
            winSound.play();
      }else if(value === 'lose'){
            const loseSound = new Audio('gameover.mp3'); // replace with your actual file path
            loseSound.play();
      }
}

//reset game function
function resetGame(){
      playerScore = 0;
      computerScore = 0;
      playerScoreDisplay.textContent = `${playerScore}`;
      computerScoreDisplay.textContent = `${computerScore}`;
      resultDisplay.textContent = 'Make your choice!';
}

function updateScores(value) {
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

}

function displayMessage(message) {
  resultDisplay.textContent = message;
}

let playerChoice; // just declared (not assigned yet)

//computer chose will be generated randomly
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// function to handle selection
function playerSelection(choice) {
  playerChoice = choice; // update global variable
  console.log("Player chose:", playerChoice);

//extra for console
  const computerChoice = getComputerChoice();
  console.log("Computer chose:", computerChoice);


  //core part just check match or not 
  if (playerChoice === computerChoice) {
      displayMessage('It\'s a draw!');
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
      displayMessage('You win!');
      updateScores('player'); // update player score
  } else {
    displayMessage('You lose!');
    updateScores('computer'); // update computer score
  }
}

// Event listeners with parameters
rockBtn.addEventListener("click", () => playerSelection('rock'));
paperBtn.addEventListener("click", () => playerSelection('paper'));
scissorsBtn.addEventListener("click", () => playerSelection('scissors'));
//complete of project
