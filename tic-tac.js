const tdClickArea = document.querySelectorAll("td");
const playerTurnMsg = document.getElementById('player-turn');
const resultMessage = document.getElementById("root");
const newGameBtn = document.getElementById("new-game");
newGameBtn.disabled = true;
//Test Arrays

let joueur1Sq = [];
let joueur2Sq = [];
let counter = 0;

let win = [
    /(?:^|\W)[0-2][0-2][0-2](?:$|\W)/gm,
    /(?:^|\W)[3-5][3-5][3-5](?:$|\W)/gm,
    /(?:^|\W)[6-8][6-8][6-8](?:$|\W)/gm,
    /(?:^|\W)[036][036][036](?:$|\W)/gm,
    /(?:^|\W)[147][147][147](?:$|\W)/gm,
    /(?:^|\W)[258][258][258](?:$|\W)/gm,
    /(?:^|\W)[048][048][048](?:$|\W)/gm,
    /(?:^|\W)[246][246][246](?:$|\W)/gm,
]


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


function endGameEvaluation(counter) {
    if (counter == 9) {
        resultMessage.innerHTML = `<div id="resultMessage">End of the game</div>`;
        newGameBtn.disabled = false;
    }
}

function resetGame() {
    tdClickArea.forEach(item => {
        item.innerHTML = "";
        counter = 0;
        joueur1Sq = [];
        joueur2Sq = [];
        changeTurn();
        resultMessage.innerHTML = "";
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
        let tempArray;

        if (btnArea.innerHTML == "X" || btnArea.innerHTML == "O") {
            alert("tricheur! Choisi une autre case")
        } else {
            if (joueur1Turn) {
                btnArea.innerHTML = "X";
                joueur1Sq.push(btnArea.getAttribute("value"));
                tempArray = joueur1Sq.join("");
                console.log(tempArray);
            } else if (joueur2Turn) {
                btnArea.innerHTML = "O";
                joueur2Sq.push(btnArea.getAttribute("value"));
            }
            counter++;
            changeTurn();
            endGameEvaluation(counter);
        }
        if (tempArray.length >= 3) {
            for (let i = 0; i < 8; i++)
                if (tempArray.match(win[i])) {
                    counter = 9;
                    endGameEvaluation(counter);
                    alert("you win");
                }

        }
    })
});

newGameBtn.addEventListener("click", () => {
    resetGame();
})