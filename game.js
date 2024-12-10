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

// function getHumanChoice() {
//     const humanChoice = window.prompt("Enter your choice from rock, paper, scissors");
//     return humanChoice.toLowerCase();
// }

function playRound(humanChoice, computerChoice) {
    const div = document.querySelector("div");
    if (humanChoice == computerChoice) {
        div.textContent = `You tied! You both chose ${humanChoice}`;
        return null;
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper")) {
            div.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            return true;
    }
    else {
        div.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
        return false;
    }
}

function playGame(humanChoice) {
    let isHumanWinner = null;

    // const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    isHumanWinner = playRound(humanChoice, computerChoice);
    if (isHumanWinner == true) {
        humanScore++;
    } else if (isHumanWinner == false) {
        computerScore++;
    }

    const score_tally = `Score tally:<br>
                         Human Score: ${humanScore}<br>
                         Computer Score: ${computerScore}
                        `;
    const scoreTally = document.querySelector("#score");
    scoreTally.innerHTML = `${score_tally}`;

    if (humanScore == 5) {
        endGame(true);
    } else if (computerScore == 5) endGame(false);
}

function endGame(isHumanWinner) {
    buttons.forEach((button) => button.remove());
    const finalWinner = document.querySelector("h3");
    finalWinner.textContent = `${isHumanWinner ? "You won!" : "You lost!"}`;
    document.querySelector("body").appendChild(finalWinner);
    document.querySelector("div").textContent = "";
}

let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => playGame(button.textContent));
});