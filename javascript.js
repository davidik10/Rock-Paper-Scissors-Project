const buttons = document.querySelectorAll("button");
const div = document.querySelector("div");
let playerCounter = 0;
let computerCounter = 0;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x==0) return ("rock");
    else if (x==1) return ("scissors");
    else return ("paper");
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You win! Rock beats scissors!")
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return ("You lose! Paper beats Rock!");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ("You lose! Rock beats Scissors!");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("You win! Scissors beats Paper!");
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("You win! Paper beats Rock!");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ("You lose! Scissors beats Paper!");
    }
    
    else { 
        return ("Draw!");
    }
}

function click(e) {
    const playerSelection = e.target.className;
    const result = (playRound(playerSelection));
    div.textContent = `\t${result}`;
    if (result.includes('win')) playerCounter++;
    else if (result.includes("lose")) computerCounter++;
    alert (`Score: ${playerCounter}(you) - ${computerCounter}(computer)`);
    if (playerCounter === 5) {
        alert ("You won the game!");
        playerCounter = 0;
        computerCounter = 0;
    }
    else if (computerCounter === 5) {
        alert ("You lost the game!");
        playerCounter = 0;
        computerCounter = 0;
    } 
}

buttons.forEach (btn => btn.addEventListener('click', click));
            




