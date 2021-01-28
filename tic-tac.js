const tdClickArea = document.querySelectorAll("td");


/** 
 * Event Listener Logic. Clicks based on turn will return an "X" or "O".
 * if 3 are in a row veritcal, diagonal, or horizontal the player wins.
 * else game is a tie.
 * 
 */
tdClickArea.forEach(item => {
    item.addEventListener('click', e => {
        let btnArea = e.target;

        // Replaces inner HTML of the Cell
        btnArea.innerHTML = "B";

    })
});