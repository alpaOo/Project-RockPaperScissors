const choiceButtons = document.querySelectorAll("#choiceButtons");
let playerSelection;
let computerSelection;
let results;

choiceButtons.forEach(button => button.addEventListener('click', () => {
	
	playerSelection = button.textContent;
	console.log(playerSelection);
	getComputerChoice();
	console.log(getComputerChoice());

	document.querySelector("#playerText").innerHTML = `Player: ${playerSelection}`;
	document.querySelector("#computerText").innerHTML = `Computer: ${computerSelection}`;
	// getResult();
}));

function getComputerChoice(){
	computerSelection = Math.floor(Math.random() * 3) + 1;
	switch(computerSelection){
		case 1:
			computerSelection = "ROCK";
			break;
		case 2:
			computerSelection = "PAPER";
			break;
		case 3:
			computerSelection = "SCISSORS";
			break;
	}
}