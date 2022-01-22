const container = document.querySelector('.container');

let size = 16;
createGrid(size);



function createGrid(size) {
    for (let x = 0; x < size; x++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
        container.appendChild(rows);
        for (let z = 0; z < size; z++) {
            const box = document.createElement('div');
            box.classList.add('boxes');
            rows.appendChild(box);
        }
    }
    const gridBoxes = document.querySelectorAll('.boxes');
    gridBoxes.forEach(box => box.addEventListener('mouseover',e => e.target.classList.add('hover')));

}




function removeGrid() {
    const gridBoxes = document.querySelectorAll('.boxes');
    gridBoxes.forEach(element => {
        element.remove();
    });
    const rows = document.querySelectorAll('.rows');
    rows.forEach(element => {
        element.remove();
    });
}

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click',removeClass);

function removeClass() {
    const gridBoxes = document.querySelectorAll('.boxes');
    for (let index = 0; index < gridBoxes.length; index++) {
        gridBoxes[index].classList.remove('hover');
    }
    removeGrid();
    size = prompt("enter number");
    createGrid(size);

}

