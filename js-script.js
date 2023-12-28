



const grid = document.querySelector(".container-grid");


function createGrid(){

    const width = 4;
    const height = 5;
    grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${height}, 1fr)`;

    for(let i=0; i<(width*height); i++){
        const tile = document.createElement("button");
        tile.classList.add("grid-tile");
        tile.textContent = i;
        //grid.appendChild(tile);
    }




}




window.onload = () => {createGrid()};