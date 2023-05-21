

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x==0) {
        return ("rock");
    }
    else if (x==1) {
        return ("scissors");
    }
    else {
        return ("paper");
    }
    }



function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Choose your game option:(rock,scissors,paper)");
    playerSelection = playerSelection.toLowerCase();
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
    //else if (playerSelection != "paper" || playerSelection != "rock" || playerSelection != "scissors") {
    //    console.log ("Invalid input!");
    //    playRound();
    //}
    else { 
        return ("Draw!");
    }
}

function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    for (let i=0; i<5; i++) {
        let x = playRound();
        console.log(x);
        if (x.includes('win')) {
            playerCounter++;
        }
        else if (x.includes("lose")) {
            computerCounter++;
        }
        else {
            playerCounter++;
            computerCounter++;
        }
        console.log("playerCounter = "+ playerCounter);
        console.log("computerCounter = " + computerCounter);
    }
    if (playerCounter > computerCounter) {
        return ("You won the game!");
    }
    else if (playerCounter < computerCounter) {
        return ("You lost the game!");
    }
    else {
        return ("Draw!");
    }
}

console.log(game(playRound));

