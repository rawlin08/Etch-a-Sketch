// default size

let size = 16;
let currentColor = '#000000'

// targets for DOM

const container = document.querySelector('.container');
const button = document.querySelector('.clear')
button.addEventListener('click', clearGrid);

// creating the grid

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
for (let i = 0; i < size * size; i++) {
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