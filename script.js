let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            choice = "rock";
            break;
        case 2: 
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    // console.log(choice);
    return choice;
}

function getHumanChoice() {
    let guess = prompt("Choose: Rock, Paper, Scissors");
    return guess;
    // console.log(guess);
}
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
