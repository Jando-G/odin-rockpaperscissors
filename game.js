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
    console.log("a round was played");
    return player - computer
}

const buttons = document.querySelectorAll(".selection");
buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        const result = playRound(strtonum(e.target.dataset.key), computerPlay());
        console.log("result: " + result)
    })
})