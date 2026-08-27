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
  let humanChoiceLower = humanChoice.toLowerCase();
  console.log(computerChoice);
  console.log(humanChoiceLower);
  if (computerChoice === "rock" && humanChoiceLower === "paper") {
    return "You win!";
  } else if (computerChoice === "rock" && humanChoiceLower === "rock") {
    return "It's a tie!";
  } else if (computerChoice === "rock") {
    return "You lose!";
  } else if (computerChoice === "paper" && humanChoiceLower === "scissors") {
    return "You win!";
  } else if (computerChoice === "paper" && humanChoiceLower === "paper") {
    return "It's a tie!";
  } else if (computerChoice === "paper" && humanChoiceLower == "rock") {
    return "You lose!";
  } else if (computerChoice === "scissors" && humanChoiceLower === "paper") {
    return "You lose!";
  } else if (computerChoice === "scissors" && humanChoiceLower === "scissors") {
    return "It's a tie!";
  } else if (computerChoice === "scissors" && humanChoiceLower === "rock") {
    return "You win!";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundWinOrLose;
  //   roundWinOrLose = playRound(getHumanChoice(), getComputerChoice());
  //     console.log(roundWinOrLose);
  for (i = 0; i < 5; i++) {
    roundWinOrLose = playRound(getHumanChoice(), getComputerChoice());
    console.log(roundWinOrLose);
    if (roundWinOrLose === "You win!") {
      humanScore = humanScore + 1;
    } else if (roundWinOrLose === "You lose!") {
      computerScore = computerScore + 1;
    }
    console.log(humanScore);
    console.log(computerScore);
  }

  console.log(computerScore);
  console.log(humanScore);
  if (humanScore > computerScore) {
    console.log("Game Over! You Win!");
  } else if (computerScore > humanScore) {
    console.log("Game Over! You Lose!");
  } else {
    console.log("It's a tie!");
  }
}
playGame();
