let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let determiner = Math.floor(Math.random() * 100);
    if (determiner < 34) {
        return "rock";
    } else if (determiner >= 34 && determiner < 67) {
        return "paper";
    } else if (determiner >= 67) {
        return "scissors";
    }
}

// function getUserChoice() {
//     userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

//     console.log(userChoice);

//     if (!(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors")) {
//         alert("Invalid input!");
//         getUserChoice();
//     }

//     return userChoice;
// }

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice) {
        case "rock":
            if (computerChoice === "rock") {
                return;
            } else if (computerChoice === "paper") {
                computerScore++;
                break;
            } else {
                userScore++;
                break;
            }
        case "paper":
            if (computerChoice === "rock") {
                userScore++;
                break;
            } else if (computerChoice === "paper") {
                return;
            } else {
                computerScore++;
                break;
            }
        case "scissors":
            if (computerChoice === "rock") {
                computerScore++;
                break;
            } else if (computerChoice === "paper") {
                userScore++;
                break;
            } else {
                return;
            }
    }

    console.log(userChoice + ", " + computerChoice)
    const currentScore = document.querySelector('.score');
    currentScore.textContent = `User ${userScore} - ${computerScore} Computer`;

    if (computerScore == 5) {
        // Hide the scoreboard and just show the result
        currentScore.textContent = "";

        const result = document.querySelector(".result");
        result.textContent = `The computer has won with a score of ${computerScore} to ${userScore}!`;
    } else if (userScore == 5) {
        currentScore.textContent = "";
        
        const result = document.querySelector(".result");
        result.textContent = `You have won with a score of ${userScore} to ${computerScore}!`;
    }
}

// function playGame() {
//     let userScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         let result = playRound(userChoice);

//         if (result === "You win!") {
//             userScore++;
//         } else if (result === "You lose!") {
//             computerScore++;
//         } else if (result === "Tie!") {
//             continue;
//         }
//     }

//     if (userScore > computerScore) {
//         return "You won the game!";
//     } else {
//         return "You lost...";
//     }
// }