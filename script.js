let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText");
let resultsText = document.querySelector("#resultsText");
const choiceButtons = document.querySelectorAll("#choiceButtons");
let playerSelection;
let computerSelection;
let results;

choiceButtons.forEach(button => button.addEventListener('click', () => {
	
	playerSelection = button.textContent;
	console.log(playerSelection);
	getComputerChoice();
	console.log(getComputerChoice());

	playerText.innerHTML = `Player: ${playerSelection}`;
	computerText.innerHTML = `Computer: ${computerSelection}`;
	getResult();

}));

function getResult(){
	if(playerSelection === computerSelection){
		resultsText.innerHTML = "Result: It's a DRAW.";
	}	else if((playerSelection === "ROCK") && (computerSelection === "SCISSORS")){
		resultsText.innerHTML = "Result: You WIN."
	} 	else if((playerSelection === "PAPER") && (computerSelection === "ROCK")){
		resultsText.innerHTML = "Result: You WIN."
	}	else if((playerSelection === "SCISSORS") && (computerSelection === "PAPER")){
		resultsText.innerHTML = "Result: You WIN."
	}	else {
		resultsText.innerHTML = "Result: You LOSE."
	}
}

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