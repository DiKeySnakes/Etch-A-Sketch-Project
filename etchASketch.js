// const container = document.getElementById('container');
const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear');

function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div');
    // cell.innerText = c + 1;
    container.appendChild(cell).className = 'grid-item';
  }
}

const resolution = document.querySelector('#resolution');
const output = document.querySelector('.resolution-output');

output.textContent = resolution.value;

resolution.addEventListener('input', () => {
  output.textContent = resolution.value;
});

rows = cols = output.textContent;
createGrid(rows, cols);

function random(number) {
  return Math.floor(Math.random() * number);
}

function rainbowColor() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

container.addEventListener(
  'mouseover',
  (event) => (event.target.style.backgroundColor = rainbowColor())
);

function update() {
  let a = output.textContent;
  let b = output.textContent;
  container.innerHTML = '';
  createGrid(a, b);
}

resolution.addEventListener('change', update);

clearButton.addEventListener('click', update);
