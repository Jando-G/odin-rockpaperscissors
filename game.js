function computerPlay() {
    return Math.floor(Math.random() * 3)
}
function numtostr(num) {
    switch(num) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            return "null"
    }
}
function strtonum(str) {
    str = str.toLowerCase()
    switch(str) {
        case "rock":
            return 0
        case "paper":
            return 1
        case "scissors":
            return 2
        default:
            return 99
    }
}
function playRound(player, computer) {
    return player - computer
}
function game() {
    let player = 0
    let computer = 0
    let res = 0
    let com = 0
    console.log("Welcome to my Rock Paper Scissors BO5 game!")
    while(player < 3 && computer < 3) {
        let sel = prompt("Please make a selection", "rock")
        sel = strtonum(sel)
        com = computerPlay()
        res = playRound(sel, com)
        if(res == 1 || res == -2) {
            player++
            console.log(numtostr(sel) + " beats " + numtostr(com) + "! Player has " + player + " wins.")
        }
        else if(res == -1 || res == 2) {
            computer++
            console.log(numtostr(com) + " beats " + numtostr(sel) + "! Computer has " + computer + " wins.")
        }
        else if(res == 0) {
            console.log(numtostr(sel) + " vs " + numtostr(com) + ". This round's a draw")
        }
        else {
            console.log("invalid input")
        }
    }

    if(player > computer) {
        console.log("Player wins " + player + " to " + computer)
    }
    else {
        console.log("Computer wins " + computer + " to " + player)
    }
}

game()