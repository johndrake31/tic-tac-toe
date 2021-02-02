const tdClickArea = document.querySelectorAll("td");
const playerTurnMsg = document.getElementById('player-turn');
const resultMessage = document.getElementById("root");
const newGameBtn = document.getElementById("new-game");

let counter = 0;

//Game vars
let win = ["012", "345", "678", "036", "147", "258", "048", "246"];
let joueur1Turn = true;
let joueur2Turn = false;
let joueur1Win = false;
let joueur2Win = false;
let joueur1Sq = [];
let joueur2Sq = [];
playerTurnMsg.className = "joueur1"
let gameWon = false;

function changeTurn() {
    if (joueur1Turn && !gameWon) {
        joueur1Turn = false;
        joueur2Turn = true;
        playerTurnMsg.innerHTML = "P2: Your Turn !"
        playerTurnMsg.className = "joueur2"
    } else if (joueur2Turn && !gameWon) {
        joueur1Turn = true;
        joueur2Turn = false;
        playerTurnMsg.innerHTML = "P1: Your Turn !"
        playerTurnMsg.className = "joueur1"
    }
}

function endGameEvaluation() {
    if (joueur1Turn) {
        resultMessage.innerHTML = `<div id="resultMessage">Player 1 Wins! Game Over</div>`;
        gameWon = true;
        playerTurnMsg.innerHTML = "";
    } else if (joueur2Turn) {
        resultMessage.innerHTML = `<div id="resultMessage">Player 2 Wins! Game Over</div>`;
        gameWon = true;
        playerTurnMsg.innerHTML = "";
    }
}

function resetGame() {
    tdClickArea.forEach(item => {
        item.innerHTML = "";
        counter = 0;
        joueur1Sq = [];
        joueur2Sq = [];
        joueur1Win = false;
        joueur2Win = false;
        gameWon = false;
        changeTurn();
        resultMessage.innerHTML = "";
    })
}

function winner(player) {
    for (var i = 0; i < 8; i++) {
        let won = win[i]
        let inCommon = player.filter(x => won.includes(x));
        if (inCommon.length == 3) {
            endGameEvaluation();
        }
    }
}

tdClickArea.forEach(item => {
    item.addEventListener('click', e => {
        let btnArea = e.target;
        let player;

        if (btnArea.innerHTML == "X" || btnArea.innerHTML == "O") {
            alert("tricheur! Choisi une autre case")
        } else {
            if (joueur1Turn) {
                btnArea.innerHTML = "X";
                joueur1Sq.push(btnArea.getAttribute("value"));
                player = joueur1Sq;

            } else if (joueur2Turn) {
                btnArea.innerHTML = "O";
                joueur2Sq.push(btnArea.getAttribute("value"));
                player = joueur2Sq;
            }
        }
        if (joueur1Sq.length >= 3 || joueur2Sq.length >= 3) {
            winner(player);
        }
        counter++;
        changeTurn();
        // Here we end the game if nobody won until the last posibble move
        if (counter == 9 && gameWon == false) {
            resultMessage.innerHTML = `<div id="resultMessage">End of the game</div>`;
        }
    })
});

newGameBtn.addEventListener("click", () => {
    resetGame();
})