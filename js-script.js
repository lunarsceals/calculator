 

const numpad_grid = document.querySelector(".numpad");
const calc_btns = document.querySelectorAll("button");
const all_clear_btn = document.querySelector(".all-clear");
const clear_btn = document.querySelector(".clear");
const percentage_btn = document.querySelector(".percentage");
const decimal_btn = document.querySelector(".decimal");
const result_btn = document.querySelector(".result");


function create_grid(){
    for (i=9; i>0; i--){
        const tile = document.createElement("button");
        tile.textContent = i;
        tile.classList.add(`${i}`);
        numpad_grid.appendChild(tile);
    }
}

calc_btns.forEach((btns) => {
    btns.classList.add("calc-btn");
})


window.onload = () => {create_grid()}