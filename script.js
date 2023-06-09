const choices = ["rock", "paper", "scissor"]

	function getComputerChoice(){
		return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
	if(playerSelection === computerSelection){
		console.log("It's a tie!");

	} else if(playerSelection === "rock" && computerSelection === "paper"){
		console.log("You lose. Paper beats rock.");
	} else if(playerSelection === "rock" && computerSelection === "scissor"){
		console.log("You win. Rock beats scissor.");

	} else if(playerSelection === "paper" && computerSelection === "rock"){
		console.log("You win. Paper beats rock.");
	}  else if(playerSelection === "paper" && computerSelection === "scissor"){
		console.log("You lose. Scissor beats paper.");

	}	else if(playerSelection === "scissor" && computerSelection === "rock"){
		console.log("You lose. Rock beats scissor.");
	}	else if(playerSelection === "scissor" && computerSelection === "paper"){
		console.log("You win. Scissor beats paper.");
	}
}

const computerSelection = getComputerChoice();
const askPlayerSelection = prompt("Rock, paper, or scissor. Choose one...");
const playerSelection = askPlayerSelection;
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));


