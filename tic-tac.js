const tdClickArea = document.querySelectorAll("td");
const playerTurnMsg = document.getElementById('player-turn');
const resultMessage = document.getElementById("root");
const newGameBtn = document.getElementById("new-game");
newGameBtn.disabled = true;

let counter = 0;


//Game vars
let joueur1Turn = true;
let joueur2Turn = false;
let joueur1Win = false;
let joueur2Win = false;


playerTurnMsg.className = "joueur1"


//Test Arrays
let joueur1Sq = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,

];
let joueur2Sq = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
];


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

function winGame(array) {
    //Horizontal Wins
    if (array[0] == true && array[1] == true && array[2] == true) {
        alert("great job you won")
    } else if (array[3] == true && array[4] == true && array[5] == true) {
        alert("great job you won")
    } else if (array[6] == true && array[7] == true && array[8] == true) {
        alert("great job you won")
    }
    //Vertical Wins
    else if (array[0] == true && array[3] == true && array[6] == true) {
        alert("great job you won")
    } else if (array[1] == true && array[4] == true && array[7] == true) {
        alert("great job you won")
    } else if (array[2] == true && array[5] == true && array[8] == true) {
        alert("great job you won")
    }
    //Diagonal Wins
    else if (array[2] == true && array[4] == true && array[6] == true) {
        alert("great job you won")
    } else if (array[0] == true && array[4] == true && array[8] == true) {
        alert("great job you won")
    }
}

function endGameEvaluation() {
    if (counter == 9) {
        resultMessage.innerHTML = `<div id="resultMessage">End of the game</div>`;
        newGameBtn.disabled = false;
        playerTurnMsg.innerHTML = "";
    }
}

function resetGame() {
    tdClickArea.forEach(item => {
        item.innerHTML = "";
        counter = 0;
        joueur1Sq = [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        ];
        joueur2Sq = [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
        ];
        joueur1Win = false;
        joueur2Win = false;
        changeTurn();
        resultMessage.innerHTML = "";
    })
}


tdClickArea.forEach(item => {
    item.addEventListener('click', e => {
        let btnArea = e.target;

        if (btnArea.innerHTML == "X" || btnArea.innerHTML == "O") {
            alert("tricheur! Choisi une autre case")
        } else {
            if (joueur1Turn) {
                btnArea.innerHTML = "X";
                joueur1Sq[btnArea.getAttribute("value")] = true;
                winGame(joueur1Sq);

            } else if (joueur2Turn) {
                btnArea.innerHTML = "O";
                joueur2Sq[btnArea.getAttribute("value")] = true;
                winGame(joueur2Sq)
            }
            counter++;
            changeTurn();
            endGameEvaluation(counter);
        }
    })
});

newGameBtn.addEventListener("click", () => {
    resetGame();
})