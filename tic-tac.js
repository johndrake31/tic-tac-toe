const tdClickArea = document.querySelectorAll("td");




tdClickArea.forEach(item => {
    item.addEventListener('click', e => {
        let btnArea = e.target;
        console.log(btnArea);
    })
});