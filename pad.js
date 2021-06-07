const maindiv = document.createElement('div');
let container = document.getElementById("container");
const gridSize = 800;
let resetcounter = 0;
maindiv.setAttribute('id','mainpad');
container.appendChild(maindiv);



//a function to create a grid of size [input] inside the maindiv element
function createGrid(input){
    let cellSize = gridSize/input + "px";
    
    for(let j = 0; j < input; j++){
        for(let i = 0; i < input; i++){
            let cell = document.createElement("div");
            cell.setAttribute('class', 'cell');
            cell.style.width = cellSize;
            cell.style.height = cellSize;
            cell.style.gridColumnStart = i;
            cell.style.gridColumnEnd = i+1;
            cell.style.gridRowStart = j;
            cell.style.gridRowStart = j+1;
            cell.addEventListener('mouseover', handleHover);
            maindiv.appendChild(cell);
        }
    }
}

function handleHover(e){
    e.currentTarget.style.backgroundColor = 'black';
}

function handleReset(){
    let numberOfCells = prompt("Please enter a number between 4 and 100:", 16);
    let cells = document.getElementsByClassName("cell");

    while(cells.length > 0){
        cells.item(0).remove();
    }

    createGrid(numberOfCells);
}

createGrid(16);
let button = document.getElementById('reset');
button.addEventListener('click', handleReset);