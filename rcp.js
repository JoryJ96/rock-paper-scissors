alert(playGame());


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

function getUserChoice() {
    userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    console.log(userChoice);
    if (!(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors")) {
        alert("Invalid input!");
        getUserChoice();
    }

    return userChoice;
}

function playRound(userChoice, computerChoice) {
    switch (userChoice) {
        case "rock":
            if (computerChoice === "rock") {
                return "Tie!";
            } else if (computerChoice === "paper") {
                return "You lose!";
            } else {
                return "You win!";
            }
        case "paper":
            if (computerChoice === "rock") {
                return "You win!";
            } else if (computerChoice === "paper") {
                return "Tie!";
            } else {
                return "You lose!";
            }
        case "scissors":
            if (computerChoice === "rock") {
                return "You lose!";
            } else if (computerChoice === "paper") {
                return "You win!";
            } else {
                return "Tie!";
            }
    }
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice();

        let result = playRound(userChoice, computerChoice);

        if (result === "You win!") {
            userScore++;
        } else if (result === "You lose!") {
            computerScore++;
        } else if (result === "Tie!") {
            continue;
        }
    }

    if (userScore > computerScore) {
        return "You won the game!";
    } else {
        return "You lost...";
    }
}