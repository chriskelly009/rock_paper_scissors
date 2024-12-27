/*  
Create a loop that loops 5 times, once for each round
Computer makes a choice from 3 random numbers
Each number represents either rock, paper, or scissors
User enters choice of rock, paper, or scissors
Make the choice all the same case
Compare the users choice to the computer's choice
If the choice matches the computer choice, print a you win message
If not print a you did not win message
At the end of 5 rounds print a game over message
Exit the loop
*/

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
    return choice;
}

function getHumanChoice() {
    let guess = prompt("Choose: Rock, Paper, Scissors");
    guess = guess.toLowerCase();
    while(guess != "rock" && guess != "paper" && guess != "scissors") {
        guess = prompt("Please enter a choice: Rock, Paper, Scissors");
    }
    return guess;
    
}
function playRound(humanChoice, computerChoice) {
    
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore += 1;
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore += 1;
        } else {
            console.log("It's a tie!");
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore += 1;
        } else if (computerChoice == "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore += 1;
        } else {
            console.log("It's a tie!")
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore += 1;
        } else if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore += 1;
        } else {
            console.log("It's a tie!")
        }
    }
}
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`You won ${humanScore} rounds.`);
    console.log(`Computer won ${computerScore} rounds`);
    if(computerScore > humanScore) {
        console.log("Computer wins the game!")
    } else if (humanScore > computerScore) {
        console.log("You win the game!")
    } else {
        console.log("It's a tie! No one wins the game.")
    }
}

playGame();
