function getComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "rock";
    } else if (computerChoice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = window.prompt("Enter your choice from rock, paper, scissors");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`You tied! You both chose ${humanChoice}`);
        return null;
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return true;
    }
    else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        return false;
    }
}

function playGame() {
    let isHumanWinner = null;
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        isHumanWinner = playRound(getHumanChoice(), getComputerChoice());
        if (isHumanWinner == true) {
            humanScore++;
        } else if (isHumanWinner == false) {
            computerScore++;
        }
    }
    const score_tally = 
    `Score tally:
    Human Score: ${humanScore}
    Computer Score: ${computerScore}
    `;
    console.log(`${score_tally}`);
}

playGame();