
function getHumanChoice(choice) {
   console.log(choice);
   return choice;

}


const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
   const choice = options[Math.floor(Math.random() * options.length)];
   console.log(choice);
   return choice;

}


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
const computerSelection = getComputerChoice();
const resultText = document.querySelector("#resulttext");

//retrieve computer selection
// compare computer selection to player choice
//determine a winner 

function rockRound(humanChoice, computerChoice) {
   const results = ["It's a tie!", "You win! Rock beat scissors!", "You lose! Paper beats Rock!"];
   if(humanChoice == computerChoice) {
      resultText.textContent = results[0];
      
   }
   else if(humanChoice == "rock" && computerChoice == "scissors") {
      resultText.textContent = results[1];
   }
   else {resultText.textContent = results[2];}
}


function paperRound(humanChoice, computerChoice) {
   const results = ["It's a tie!", "You win! Paper beat rock!", "You lose! Scissors beats paper!"];
   if(humanChoice == computerChoice) {
      console.log(results[0])
      
   }
   else if(humanChoice == "paper" && computerChoice == "rock") {
      console.log(results[1])
   }
   else {console.log(results[2])}
}


function scissorsRound(humanChoice, computerChoice) {
   const results = ["It's a tie!", "You win! Scissors beats paper!", "You lose! Rock beat scissors!"];
   if(humanChoice == computerChoice) {
      console.log(results[0])
      
   }
   else if(humanChoice == "scissors" && computerChoice == "paper") {
      console.log(results[1])
   }
   else {console.log(results[2])}
}