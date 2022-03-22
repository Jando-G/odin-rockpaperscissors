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
    return player - computer;
}
let Pcount = 0;
let Ccount = 0;
const PlayerPoints = document.querySelector('p[data-key="player"]');
const ComputerPoints = document.querySelector('p[data-key="computer"]');
const ResultBox = document.getElementById("result");
const buttons = document.querySelectorAll('.selection');
const PlayerChoice = document.getElementById("playerchoice");
const ComputerChoice = document.getElementById("computerchoice");

buttons.forEach(item => {
    item.addEventListener('click', (e) => {
        const computerChoice = computerPlay();
        PlayerChoice.innerHTML = e.target.dataset.key;
        ComputerChoice.innerHTML = numtostr(computerChoice);
        const result = playRound(strtonum(e.target.dataset.key), computerChoice);
        if(result == 0) {
            ResultBox.innerHTML = "This round is a draw";
        }
        if(result == 1 || result == -2) {
            ResultBox.innerHTML = "You win this round";
            Pcount++;
            PlayerPoints.innerHTML = Pcount;
        }
        if(result == -1 || result == 2) {
            ResultBox.innerHTML = "The computer wins this round";
            Ccount++;
            ComputerPoints.innerHTML = Ccount;
        }
    })
})