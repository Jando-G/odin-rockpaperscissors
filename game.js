function computerPlay() {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return "Scissors"
        case 1: 
            return "Rock"
        case 2: 
            return "Paper"
    }
    
}