const tdClickArea = document.querySelectorAll("td");
const playerTurnMsg = document.getElementById('player-turn');

//Game vars
let joueur1Turn = false;
let joueur2Turn = true;

function ChangeTurn() {
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
 * Event Listener Logic. Clicks based on turn will return an "X" or "O".
 * if 3 are in a row vertical, diagonal, or horizontal the player wins.
 * else game is a tie.
 * 
 */
tdClickArea.forEach(item => {
    item.addEventListener('click', e => {
        let btnArea = e.target;
        ChangeTurn();
        // Replaces inner HTML of the Cell
        if (playerTurnMsg.className == "joueur1") {
            btnArea.innerHTML = "X";
        }
        else {
            btnArea.innerHTML = "O";
        }


    })
});