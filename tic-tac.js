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
 * if 3 are in a row veritcal, diagonal, or horizontal the player wins.
 * else game is a tie.
 * 
 */
tdClickArea.forEach(item => {
    item.addEventListener('click', e => {
        let btnArea = e.target;
        ChangeTurn();

        /** 
         * Is if(){} logics to replaces inner HTML of the Cell 
         * based on player turns. If Player1 "X" if Player2 "O".
         * You can use below code snipet to update the innerHTML.
         */
        btnArea.innerHTML = "B";

    })
});