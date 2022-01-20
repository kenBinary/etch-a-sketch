const container = document.querySelector('.container');

for (let x = 1; x < 17; x++) {
    const rows = document.createElement('div');

    for (let z = 0; z < 16; z++) {
        const box = document.createElement('div');
        box.classList.add('boxes');
        rows.appendChild(box);
    }
    container.appendChild(rows);
}