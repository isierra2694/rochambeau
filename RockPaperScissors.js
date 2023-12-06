let playerMove;
let played;

function playGame() {
    if (played) {
        document.getElementById('game-header').innerText = "Rock, paper, scissors"
        document.getElementById('scissors-svg').style.fill = "#FFFFFF";
        document.getElementById('rock-svg').style.fill = "#FFFFFF";
        document.getElementById('paper-svg').style.fill = "#FFFFFF";
        document.getElementById('play-button').innerText = "Play move"
        played = false;
        return;
    }

    let playerPlay = playerMove;
    // random play
    let computerPlay = Math.floor(Math.random() * (3 - 1) + 1);
    switch (playerMove) {
        case "rock":
            playerPlay = 1;
            // if scissors player wins
            if (computerPlay == 3) {
                document.getElementById('scissors-svg').style.fill = "#D2FFAF";
                document.getElementById('rock-svg').style.fill = "#FE00B7";
                document.getElementById('game-header').innerText = "You win!"
            }
            // if same tie
            else if (computerPlay == 1) {
                document.getElementById('rock-svg').style.fill = "#E92345";
                document.getElementById('game-header').innerText = "Tie!"
            }
            else {
                document.getElementById('scissors-svg').style.fill = "#FE00B7";
                document.getElementById('rock-svg').style.fill = "#D2FFAF";
                document.getElementById('game-header').innerText = "Computer wins!"
            }
            break;
        case "paper":
            playerPlay = 2;
            // if rock player wins
            if (computerPlay == 1) {
                document.getElementById('rock-svg').style.fill = "#D2FFAF";
                document.getElementById('paper-svg').style.fill = "#FE00B7";
                document.getElementById('game-header').innerText = "You win!"
            }
            // if paper tie
            else if (computerPlay == 2) {
                document.getElementById('paper-svg').style.fill = "#E92345"; 
                document.getElementById('game-header').innerText = "Tie!"
            }
            else {
                document.getElementById('rock-svg').style.fill = "#FE00B7";
                document.getElementById('paper-svg').style.fill = "#D2FFAF";
                document.getElementById('game-header').innerText = "Computer wins!"
            }
            break;
        case "scissors":
            playerPlay = 3;
            // if paper player wins
            if (computerPlay == 2) {
                document.getElementById('paper-svg').style.fill = "#D2FFAF";
                document.getElementById('scissors-svg').style.fill = "#FE00B7";
                document.getElementById('game-header').innerText = "You win!"
            }
            // if scissors tie
            else if (computerPlay == 3) {
                document.getElementById('scissors-svg').style.fill = "#E92345"; 
                document.getElementById('game-header').innerText = "Tie!"
            }
            else {
                document.getElementById('paper-svg').style.fill = "#FE00B7";
                document.getElementById('scissors-svg').style.fill = "#D2FFAF";
                document.getElementById('game-header').innerText = "Computer wins!"
            }
            break;
        default:
            window.alert("Please enter a valid response ('rock', 'paper', 'scissors')");
    }

    played = true;
    document.getElementById('play-button').innerText = "Play again?"
}

function setMove(move) {
    if (played) return;
    playerMove = move;
    document.getElementById("game-header").innerText = `Selected ${playerMove}`
}