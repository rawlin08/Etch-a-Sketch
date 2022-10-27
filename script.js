// when starting the page up

let currentColor = '#000000'

do {
    size = Number(prompt('Grid Size?'));
}
while (isNaN(size) || size < 4 || size > 100);

// targets for DOM

const container = document.querySelector('.container');
const newgrid = document.querySelector('.new');
newgrid.addEventListener('click', newGrid)
const cleargrid = document.querySelector('.clear');
cleargrid.addEventListener('click', clearGrid);

// creating the grid
  
for (let i = 0; i < size * size; i++) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    let div = document.createElement('div');
    div.classList.add('grid')
    div.addEventListener('mouseover', draw);
    container.appendChild(div);
};

function draw() {
    this.style.backgroundColor = currentColor;
}

function clearGrid() {
    const clear = document.querySelectorAll('.grid');
    clear.forEach(element => element.style.backgroundColor = '#FFFFFF');
}

function newGrid(div) {

}