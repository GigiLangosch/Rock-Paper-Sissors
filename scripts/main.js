function computerPlay() {
    let x = Math.floor(Math.random()*3);
    let hands = [
        "Rock",
        "Paper",
        "Scissors"
        ];
    let chosen = hands[x];
    return chosen;
    
};
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        let x = "It is a tie, play again!";
        return x; 
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        countH += 1;
        let x = "The human has won";
        return x;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        countH += 1;
        let x = "The human has won";
        return x;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        countH += 1;
        let x = "The human has won";
        return x;
    } else {
        countC += 1;
        let x = "Computers are superior and u will all die!!!";
        return x;
    }

};
const countH = 0;
const countC = 0;
const computerSelection = computerPlay();

function game() {
    while (i = 1, i < 6, ++1) {
        const playerSelection = prompt("What sign will you choose?");
        console.log(playRound(playerSelection, computerSelection))
    }
}

