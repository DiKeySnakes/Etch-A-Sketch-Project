'use strict';

const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear');

function createGrid(rows, cols) {
  const a = rows;
  const b = cols;
  container.style.setProperty('--grid-rows', a);
  container.style.setProperty('--grid-cols', b);
  for (let c = 0; c < a * b; c++) {
    const cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
  }
}

const resolution = document.querySelector('#resolution');
const output = document.querySelector('.resolution-output');

output.textContent = resolution.value;

resolution.addEventListener('input', () => {
  output.textContent = resolution.value;
});

const rows = output.textContent;
const cols = output.textContent;
createGrid(rows, cols);

function random(number) {
  return Math.floor(Math.random() * number);
}

function rainbowColor() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

container.addEventListener('mouseover', (event) => {
  event.target.style.backgroundColor = rainbowColor();
});

function update() {
  const a = output.textContent;
  const b = output.textContent;
  container.innerHTML = '';
  createGrid(a, b);
}

resolution.addEventListener('change', update);

clearButton.addEventListener('click', update);
