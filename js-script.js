



const grid = document.querySelector(".numpad");

function createGrid(){

    const size = 3;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(let i=(size**2); i>0; i--){
    //for (let i=1; i<=(size**2); i++){
        const tile = document.createElement("button");
        tile.classList.add("grid-tile");
        tile.textContent = i;
        grid.appendChild(tile);
    }
    



}




window.onload = () => {createGrid()};