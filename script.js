console.log("Hello World!");

const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
   const choice = options[Math.floor(Math.random() * options.length)];
   console.log(choice);
   return choice;

}


function getHumanChoice() {
   const thechoice = prompt("Rock, paper or scissors?");
   
   return thechoice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
   if(humanChoice == computerChoice) {
      return "It's a tie!"
   }
   else if (humanChoice == "rock" && computerChoice == "scissors") {
      return "You win! Rock beats scissors!"
   }
   else if (humanChoice == "rock" && computerChoice == "paper") {
      return "You lose! Paper beats rock!"
   }
   else if (humanChoice == "paper" && computerChoice == "rock") {
      return "You win! Paper beats rock!"
   }
   else if (humanChoice == "paper" && computerChoice == "scissors") {
      return "You lose! Scissors beats paper!"
   }
   else if (humanChoice == "scissors" && computerChoice == "paper") {
      return "You win! Scissors beats paper!"
   }
   else { return "You lose! Rock beats scissors!" }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
