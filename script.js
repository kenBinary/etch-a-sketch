const container = document.querySelector('.container');

let size = 16;
createGrid(size);

function createGrid(size) {
    for (let x = 0; x < size; x++) {
        const rows = document.createElement('div');
        rows.classList.add('rows');
    
        for (let z = 0; z < size; z++) {
            const box = document.createElement('div');
            box.classList.add('boxes');
            rows.appendChild(box);
        }
        container.appendChild(rows);
    }
}
const gridBoxes = document.querySelectorAll('.boxes');
gridBoxes.forEach(box => box.addEventListener('mouseover',e => e.target.classList.add('hover')));

const rows = document.querySelectorAll('.rows');

function removeGrid() {
    gridBoxes.forEach(element => {
        element.remove();
    });
    rows.forEach(element => {
        element.remove();
    });
}

const clearButton = document.querySelector('.clear');

// forEach(box => {
//     box.addEventLister("hover", (e) => e.target.classList.add('.hover'))
// });
clearButton.addEventListener('click',removeClass);

function removeClass() {
    for (let index = 0; index < gridBoxes.length; index++) {
        gridBoxes[index].classList.remove('hover');
    }
    removeGrid();
    size = prompt("eneter number");
    createGrid(parseInt(size));
}