 

const numpad_grid = document.querySelector(".numpad");

function create_grid(){
    for (i=9; i>0; i--){
        const tile = document.createElement("button");
        tile.textContent = i;
        numpad_grid.appendChild(tile);
    }
}


window.onload = () => {create_grid()}