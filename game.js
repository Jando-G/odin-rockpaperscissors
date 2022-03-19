function computerPlay() {
    return Math.floor(Math.random() * 3)
}

function playRound(player, computer) {
    player = player.toLowerCase()
    switch(player) {
        case "rock":
            player = 0
            break
        case "paper":
            player = 1
            break
        case "scissors":
            player = 2
            break
    }
    return player - computer
}

const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));