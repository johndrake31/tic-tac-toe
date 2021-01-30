const tdClickArea = document.querySelectorAll("td");
const playerTurnMsg = document.getElementById('player-turn');
const resultMessage = document.getElementById("resultMessage");
let theSquaresValues = [];
let counter = 0;
let winConditions = ["012", "345", "678", "036", "147", "258", "048", "246", ]


//Game vars
let joueur1Turn = true;
let joueur2Turn = false;
playerTurnMsg.className = "joueur1"

function changeTurn() {
    if (joueur1Turn) {
        joueur1Turn = false;
        joueur2Turn = true;
        playerTurnMsg.innerHTML = "Joueur 2 : c'est votre tour"
        playerTurnMsg.className = "joueur2"
    } else {
        joueur1Turn = true;
        joueur2Turn = false;
        playerTurnMsg.innerHTML = "Joueur 1 : c'est votre tour"
        playerTurnMsg.className = "joueur1"
    }
}

/** 
 * Create function that checks if one of the 8 
 * winning possibilities happened 
 * or if all moves are finished
 * The winning possibilities from the array indexes are:
 * Horizontally => 
 * 0, 1, 2;
 * 3, 4, 5;
 * 6, 7, 8
 * Vertically => 
 * 0, 3, 6;
 * 1, 4, 7;
 * 2, 5, 8
 * Diagonally => 
 * 0, 4, 8; 
 * 2, 4, 6
 */

function endGameEvaluation(counter) {
    if (counter == 9) {
        resultMessage.innerHTML = "End of the game!";
    }
}

function resetGame() {
    tdClickArea.forEach(item => {
        item.innerHTML = "";
    })
}

/** 
 * Event Listener Logic. Clicks based on turn will return an "X" or "O".
 * if 3 are in a row vertical, diagonal, or horizontal the player wins.
 * else game is a tie.
 * 
 */
tdClickArea.forEach(item => {
    item.addEventListener('click', e => {
        let btnArea = e.target;

        if (btnArea.innerHTML == "X" || btnArea.innerHTML == "O") {
            alert("tricheur! vous perdez votre tour")
            changeTurn();
        } else {
            if (joueur1Turn) {
                btnArea.innerHTML = "X";
            } else if (joueur2Turn) {
                btnArea.innerHTML = "O";
            }
            counter++;
            changeTurn();
            endGameEvaluation(counter);
        }
    })
});