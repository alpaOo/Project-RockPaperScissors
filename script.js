let playerText = document.querySelector('#playerText');
let computerText = document.querySelector('#computerText');
let resultsText = document.querySelector('#resultsText');
const choiceButtons = document.querySelectorAll('#choiceButtons');
let playerSelection;
let computerSelection;

choiceButtons.forEach((button) =>
  button.addEventListener('click', () => {
    playerSelection = button.textContent;
    // console.log(playerSelection);
    getComputerChoice();
    // console.log(getComputerChoice());

    playerText.innerText = `Player: ${playerSelection}`;
    computerText.innerText = `Computer: ${computerSelection}`;
    getResult();
  })
);

function getResult() {
  const winConditions = {
    ROCK: 'SCISSORS',
    PAPER: 'ROCK',
    SCISSORS: 'PAPER',
  };

  if (playerSelection === computerSelection) {
    resultsText.innerText = `Result: It's a DRAW!`;
  } else if (winConditions[playerSelection] === computerSelection) {
    resultsText.innerText = `Result: You WIN!`;
  } else {
    resultsText.innerText = `Result: You LOSE!`;
  }
}

function getComputerChoice() {
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  const randomValue = Math.floor(Math.random() * choices.length);
  computerSelection = choices[randomValue];
}
