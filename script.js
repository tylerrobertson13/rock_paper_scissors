

function getHumanChoice(choice) {
   console.log(choice);
   return choice;

}



const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
   
   
   const choice = options[Math.floor(Math.random() * options.length)];
   if(choice == "rock") {
      
      document.getElementById('computerimg').innerText = "🪨"
   }
   else if(choice == "paper") {
      document.getElementById('computerimg').innerText = "📄"
   }
   else if(choice == "scissors") {
      document.getElementById('computerimg').innerText = "✂️"
   }
   return choice;

}

const cycle = ["🪨", "📄", "✂️"];
let index = 0;
let intervalId;

function startCycle() {
   intervalId = setInterval(() => {
      document.getElementById('computerimg').innerText = cycle[index];
      index = (index + 1) % cycle.length;
   }, 76);
}
function slowCycleOne() {
  setTimeout(() => {
   clearInterval(intervalId);

   intervalId = setInterval(() => {
   document.getElementById('computerimg').innerText = cycle[index];
   index = (index + 1) % cycle.length;
}, 95);}, 760);
  
}

function slowCycleTwo() {
   setTimeout(() => {
    clearInterval(intervalId);
    
    intervalId = setInterval(() => {
    document.getElementById('computerimg').innerText = cycle[index];
    index = (index + 1) % cycle.length;
 }, 108);}, 1520);
   
 }

 function slowCycleThree() {
   setTimeout(() => {
    clearInterval(intervalId);
    
    intervalId = setInterval(() => {
    document.getElementById('computerimg').innerText = cycle[index];
    index = (index + 1) % cycle.length;
 }, 126);}, 1900);
   
 }

 function slowCycleFour() {
   setTimeout(() => {
    clearInterval(intervalId);
    
    intervalId = setInterval(() => {
    document.getElementById('computerimg').innerText = cycle[index];
    index = (index + 1) % cycle.length;
 }, 152);}, 2280);
   
 }

 function slowCycleFive() {
   setTimeout(() => {
    clearInterval(intervalId);
    
    intervalId = setInterval(() => {
    document.getElementById('computerimg').innerText = cycle[index];
    index = (index + 1) % cycle.length;
 }, 190);}, 2660);
   
 }

 function slowCycleSix() {
   setTimeout(() => {
    clearInterval(intervalId);
    
    intervalId = setInterval(() => {
    document.getElementById('computerimg').innerText = cycle[index];
    index = (index + 1) % cycle.length;
 }, 253);}, 3040);
   
 }

 function slowCycleSeven() {
   setTimeout(() => {
    clearInterval(intervalId);
    
    intervalId = setInterval(() => {
    document.getElementById('computerimg').innerText = cycle[index];
    index = (index + 1) % cycle.length;
 }, 380);}, 3420);
   
 }

function stopCycle() {
   clearInterval(intervalId);

}

function roundCycle() {
   getReadyText();
   startCycle();
   slowCycleOne();
   slowCycleTwo();
   slowCycleThree();
   slowCycleFour();
   slowCycleFive();
   slowCycleSix();
   //slowCycleSeven();
   
   setTimeout(() => {
      clearInterval(intervalId);
   }, 3800);
}



const computerSelection = getComputerChoice();
const resultText = document.querySelector("#resulttext");
const winLoss = document.querySelector("#win-loss");
const playerCount = document.querySelector("#player-count");
const tieCount = document.querySelector("#tie-count");
const computerCount = document.querySelector("#computer-count");
const computerImg = document.querySelector("#computerimg");

let playerScore = 0;
let tieScore = 0;
let computerScore = 0;
/*
if (playerScore == 0 && tieScore == 0 && computerScore == 0) {
   startCycle();
} else {
 stopCycle();}
*/
//retrieve computer selection
// compare computer selection to player choice
//determine a winner 
const playerSelectionImg = document.querySelector("#playerimg");
const results = ["It's a Tie😶", "You Win!🥳", "You Lose😵‍💫", "Rock beat Scissors!", "Paper beats Rock!", "Scissors beats Paper!"];

function rockRound(humanChoice, computerChoice) {

   roundCycle();
   
   setTimeout(() => {
      clearInterval(intervalId);
   playerSelectionImg.textContent = "🪨"

  
   if(humanChoice == computerChoice) {
      winLoss.textContent = results[0];
      winLoss.style.fontWeight = "bold";
      winLoss.style.fontSize = "65px";
      winLoss.style.color = "black"
      resultText.textContent = "";
      tieScore++;
      tieCount.textContent = tieScore;
      computerImg.textContent = "🪨";
      
   }
   else if(humanChoice == "rock" && computerChoice == "scissors") {
      winLoss.textContent = results[1];
      winLoss.style.color = "green";
      winLoss.style.fontSize = "65px";
      winLoss.style.fontWeight = "bold";
      resultText.textContent = results[3];
      playerScore++;
      playerCount.textContent = playerScore;
      computerImg.textContent = "✂️";
   }
   else {winLoss.textContent = results[2];
      winLoss.style.color = "red";
      winLoss.style.fontSize = "65px";
      winLoss.style.fontWeight = "bold";
      resultText.textContent = results[4];
      computerScore++;
      computerCount.textContent = computerScore;
      computerImg.textContent = "📄";
   }}, 3801);
}


function paperRound(humanChoice, computerChoice) {

   roundCycle();

   setTimeout(() => {
      clearInterval(intervalId);
   playerSelectionImg.textContent = "📄"

  
   if(humanChoice == computerChoice) {
      winLoss.textContent = results[0];
      winLoss.style.fontWeight = "bold";
      winLoss.style.fontSize = "65px";
      winLoss.style.color = "black"
      resultText.textContent = "";
      tieScore++;
      tieCount.textContent = tieScore;
      computerImg.textContent = "📄";
   }
   else if(humanChoice == "paper" && computerChoice == "rock") {
      winLoss.textContent = results[1];
      winLoss.style.color = "green";
      winLoss.style.fontSize = "65px";
      winLoss.style.fontWeight = "bold";
      resultText.textContent = results[4];
      playerScore++;
      playerCount.textContent = playerScore;
      computerImg.textContent = "🪨";
   }
   else {winLoss.textContent = results[2];
      winLoss.style.color = "red";
      winLoss.style.fontSize = "65px";
      winLoss.style.fontWeight = "bold";
      resultText.textContent = results[5];
      computerScore++;
      computerCount.textContent = computerScore;
      computerImg.textContent = "✂️";
   }}, 3801);
}


function scissorsRound(humanChoice, computerChoice) {

   roundCycle();

   setTimeout(() => {
      clearInterval(intervalId);

   playerSelectionImg.textContent = "✂️"

  
   if(humanChoice == computerChoice) {
      winLoss.textContent = results[0];
      winLoss.style.fontWeight = "bold";
      winLoss.style.fontSize = "65px";
      winLoss.style.color = "black"
      resultText.textContent = "";
      tieScore++;
      tieCount.textContent = tieScore;
      computerImg.textContent = "✂️";
   }
   else if(humanChoice == "scissors" && computerChoice == "paper") {
      winLoss.textContent = results[1];
      winLoss.style.color = "green";
      winLoss.style.fontSize = "65px";
      winLoss.style.fontWeight = "bold";
      resultText.textContent = results[5];
      playerScore++;
      playerCount.textContent = playerScore;
      computerImg.textContent = "📄"
   }
   else {winLoss.textContent = results[2];
      winLoss.style.color = "red";
      winLoss.style.fontSize = "65px";
      winLoss.style.fontWeight = "bold";
      resultText.textContent = results[3];
      computerScore++;
      computerCount.textContent = computerScore;
      computerImg.textContent = "🪨";
   }}, 3801);
}


/*
let index3 = 0;
let symbolInterval;

function changeSymbol() {
   index3 = (index3 + 1) % cycle.length;
   document.getElementById('computerimg').textContent = cycle[index3];
}

function slowDown() {
   let interval = 100;
   let slowDownDuration = 2000;
   let cycles = 10;

   const slowInterval = setInterval(() => {
      if (cycles <= 0) {
         clearInterval(slowInterval);
         clearInterval(symbolInterval);
      } else {
         clearInterval(symbolInterval);
         interval += 200;
         symbolInterval = setInterval(changeSymbol, interval);
         cycles--;
      }
   }, slowDownDuration / cycles);
}

function buttonCycle() {
   clearInterval(symbolInterval);
   
   symbolInterval = setInterval(changeSymbol, 100);

   setTimeout(() => {
      clearInterval(symbolInterval);
      slowDown();
   }, 1000);

}
*/







const words = ["Rock", "Paper", "Scissors", "SHOOT!"];
let index1 = 0;
let wordInterval;

function wordCycle() {
  
   const getReady = document.getElementById("top-text");

   if(index1 < words.length) {
      getReady.textContent = words[index1];
      index1++;
   }
    else {
      clearInterval(wordInterval);
      getReady.textContent = "";
      
   }

}

function getReadyText() {
   index1 = 0;
   document.getElementById("top-text").textContent = "Get ready...";
   clearInterval(wordInterval);
   setTimeout(() => {
      wordInterval = setInterval(wordCycle, 700);
   }, 1000);
}

//const wordInterval = () => { setInterval(wordCycle, 700)}

//button pressed
//start cycle
//start rock paper scissor shoot loop for 4 seconds
//delay start of round function 4 seonds
//