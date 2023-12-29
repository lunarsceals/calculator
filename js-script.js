 

let current_input = "";
let current_operation = "";
let num1 = 0;
let num2 = 0;

const operation_list = ["add", "subtract", "divide", "multiply"];
const zero_btn = document.querySelector(".number")
const left_styling = document.querySelector(".left");

const numpad_grid = document.querySelector(".numpad");
const calc_btns = document.querySelectorAll("button");
const input = document.querySelector("#input-form");

const all_clear_btn = document.querySelector(".all-clear");
const clear_btn = document.querySelector(".clear");
const percentage_btn = document.querySelector(".percentage");
const decimal_btn = document.querySelector(".decimal");
const result_btn = document.querySelector(".result");

const add_btn = document.querySelector(".add");
const subtract_btn = document.querySelector(".subtract");
const multiply_btn = document.querySelector(".multiply");
const divide_btn = document.querySelector(".divide");

all_clear_btn.onclick = () => {input.value = ""};
clear_btn.onclick = () => {clear_input()};
percentage_btn.onclick = () => {convert_percent()};
decimal_btn.onclick = () => {add_decimal()}
result_btn.onclick = () => {input.value = calculate_result()};

add_btn.onclick = () => {operation_memory("+")};
subtract_btn.onclick = () => {operation_memory("-")};
multiply_btn.onclick = () => {operation_memory("*")};
divide_btn.onclick = () => {operation_memory("/")};

function calculate_result(){
    try{
        return eval(`${input.value}`);
    } catch (error){
        return "Error"
    }
}
function clear_input(){
    current_input = input.value;
    input.value = current_input.slice(0, -1);
}
function enter_input(e){
    if (input.value !== "Error"){
        current_input = input.value;
        input.value = current_input + e.target.textContent;
    } else {
        input.value = e.target.textContent;
    }
}
function operation_memory(operation){
    current_input = input.value;
    input.value = current_input + " " + operation + " ";
}
function convert_percent(){
     current_input = input.value;
     input.value = current_input / 100;
}
function add_decimal(){
     current_input = input.value;
     input.value = current_input + ".";
}
function create_grid(){
    for (i=9; i>0; i--){
        const tile = document.createElement("button");
        tile.textContent = i;
        tile.classList.add("number","calc-btn","black-btn")
        tile.addEventListener("click", enter_input);
        zero_btn.addEventListener("click", enter_input);
        numpad_grid.appendChild(tile);
    }
}


calc_btns.forEach((btns) => {
    btns.classList.add("calc-btn");
})

function create_decal(){
    for(let i=0; i<16; i++){
        const decal = document.createElement("div");
        decal.classList.add(".left-decal");
        decal.style.backgroundColor = "#1E1E1E"
        decal.style.width = "5px"
        decal.style.borderRadius = "5px"
        left_styling.appendChild(decal);
    }
}




window.onload = () => {create_grid(), create_decal()}