const container = document.querySelector('.container');

for (let x = 0; x < 16; x++) {
    const rows = document.createElement('div');
    rows.classList.add('rows');

    for (let z = 0; z < 16; z++) {
        const box = document.createElement('div');
        box.classList.add('boxes');
        rows.appendChild(box);
    }
    container.appendChild(rows);
}

const gridBoxes = document.querySelectorAll('.boxes');
gridBoxes.forEach(box => box.addEventListener('mouseenter',e => e.target.classList.add('hover')));

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click',removeClass);

function removeClass() {
    for (let index = 0; index < gridBoxes.length; index++) {
        gridBoxes[index].classList.remove('hover');
    }
    
}