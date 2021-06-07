const maindiv = document.createElement('div');
let container = document.getElementById("container");
const gridSize = 800;
let resetcounter = 0;
maindiv.setAttribute('id','mainpad');
container.appendChild(maindiv);



//a function to create a grid of size [input] inside the maindiv element
function createGrid(input){
    let cellSize = gridSize/input + "px";
//    let maindiv = document.createElement('div');
//    maindiv.setAttribute('class','mainpad');
//    container.appendChild(maindiv);
    
    for(let j = 0; j < input; j++){
        for(let i = 0; i < input; i++){
            let cell = document.createElement("div");
            cell.setAttribute('class', 'cell');
            //cell.style.backgroundColor = 'red';
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
    //alert("Button has been clicked");
    //maindiv.remove();
    let numberOfCells = prompt("Please enter a number between 4 and 100:", 16);
    let cells = document.getElementsByClassName("cell");
    console.log("Number of cells: " + cells.length);

    let totalcells = cells.length;
    
    for(let i = 0; i < totalcells; i++){
        console.log(`Number of cells: "${cells.length}" removing cell "${i}"`)
        cells.item(0).remove();
    }



    createGrid(numberOfCells);
}

function removeGrid(cell){
    console.log("yep this will trigger 256 times");
    cell.remove();
}

createGrid(16);
let button = document.getElementById('reset');
button.addEventListener('click', handleReset);