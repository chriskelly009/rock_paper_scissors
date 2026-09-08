let totalHumanScore = 0;
let totalComputerScore = 0;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let rock = 1;
  let paper = 2;
  let scissors = 3;

  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === rock) {
    return "rock";
  } else if (randomNum === paper) {
    return "paper";
  }
  return "scissors";
}

// function getHumanChoice() {
//   let humanChoice;
//   humanChoice = prompt("Enter choice: rock, paper, or scissors.");
//   return humanChoice;
// }

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log("computer:" + computerChoice);
  console.log("human:" + humanChoice);
  if (computerChoice == "rock" && humanChoice == "paper") {
    return "You win!";
  } else if (computerChoice == "rock" && humanChoice == "rock") {
    return "It's a tie!";
  } else if (computerChoice == "rock") {
    return "You lose!";
  } else if (computerChoice == "paper" && humanChoice == "scissors") {
    return "You win!";
  } else if (computerChoice == "paper" && humanChoice == "paper") {
    return "It's a tie!";
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    return "You lose!";
  } else if (computerChoice == "scissors" && humanChoice == "paper") {
    return "You lose!";
  } else if (computerChoice == "scissors" && humanChoice == "scissors") {
    return "It's a tie!";
  } else if (computerChoice == "scissors" && humanChoice == "rock") {
    return "You win!";
  }
}

const buttons = document.querySelectorAll("button");
const paraHumanScore = document.createElement("p");
const paraComputerScore = document.createElement("p");
const div = document.querySelector("#results");
const paraWinOrLose = document.createElement("p");
const pTotalHumScore = document.createElement("p");
const paraTie = document.createElement("p");

buttons.forEach((button) => {
  button.addEventListener("click", playGame);
});

function playGame(event) {
  let roundWinOrLose = "";
  if (paraTie.textContent != "") {
    div.appendChild(paraTie).textContent = "";
  }

  let choice = event.target.textContent;
  console.log(event.target.textContent);
  roundWinOrLose = playRound(choice, getComputerChoice());

  if (roundWinOrLose == "You win!") {
    humanScore = humanScore + 1;
  } else if (roundWinOrLose == "You lose!") {
    computerScore = computerScore + 1;
  } else {
    paraTie.textContent = "Tie!";
    div.appendChild(paraTie).textContent;
  }
  totalHumanScore += humanScore;
  totalComputerScore += computerScore;

  console.log(computerScore);
  div.appendChild(paraComputerScore).textContent =
    "Computer:   " + totalComputerScore;

  console.log(humanScore);
  div.appendChild(paraHumanScore).textContent = "Human:   " + totalHumanScore;

  if (humanScore > computerScore) {
    console.log("You Win!");
  } else if (computerScore > humanScore) {
    console.log("You Lose!");
  } else if (computerScore == humanScore) {
    console.log("It's a tie!");
  }

  humanScore = 0;
  computerScore = 0;

  if (totalHumanScore == 5) {
    // alert("Game Over! You Win!");
    div.appendChild(paraWinOrLose).textContent = "You Win!";
    humanScore = 0;
    computerScore = 0;
    roundWinOrLose = "";
    paraHumanScore.textContent = 0;
    paraComputerScore.textContent = 0;
    totalComputerScore = 0;
    totalHumanScore = 0;
  } else if (totalComputerScore == 5) {
    // alert("Game Over! You Lose");
    div.appendChild(paraWinOrLose).textContent = "You Lose!";
    humanScore = 0;
    computerScore = 0;
    roundWinOrLose = "";
    paraHumanScore.textContent = 0;
    paraComputerScore.textContent = 0;
    totalComputerScore = 0;
    totalHumanScore = 0;
  }
}
