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

function getHumanChoice() {
  let humanChoice;
  humanChoice = prompt("Enter choice: rock, paper, or scissors.");
  return humanChoice;
}

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

buttons.forEach((button) => {
  button.addEventListener("click", playGame);
});

function playGame(event) {
  let roundWinOrLose = "";

  let choice = event.target.textContent;
  roundWinOrLose = playRound(choice, getComputerChoice());

  if (roundWinOrLose == "You win!") {
    humanScore = humanScore + 1;
  } else if (roundWinOrLose == "You lose!") {
    computerScore = computerScore + 1;
  }
  // totalHumanScore += humanScore;
  // totalComputerScore += computerScore;

  console.log(computerScore);
  console.log(humanScore);

  if (humanScore > computerScore) {
    console.log("Game Over! You Win!");
  } else if (computerScore > humanScore) {
    console.log("Game Over! You Lose!");
  } else {
    console.log("It's a tie!");
  }
  if (humanScore == 5) {
    alert("Game Over! You Win!");
    humanScore = 0;
    computerScore = 0;
    roundWinOrLose = "";
  } else if (computerScore == 5) {
    alert("Game Over! You Lose");
    humanScore = 0;
    computerScore = 0;
    roundWinOrLose = "";
  }
}
