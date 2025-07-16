const sketchpad = document.querySelector('.sketchpad');
const button = document.getElementById('createGridBtn');
const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
let size = document.getElementById('size');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div'); //create div
        square.classList.add('square'); //add .square class
        square.style.width = `${100 / size}%`; //set width
        square.style.height = `${100 / size}%`; //set height
        sketchpad.appendChild(square); //append to sketchpad
    }   
}   

function clearGrid() {
    if (sketchpad.firstChild) {
        while (sketchpad.firstChild) {
            sketchpad.removeChild(sketchpad.firstChild);
        }
    }    
}

plusButton.onclick = () => {
    if (size.value < 100) { // Ensure size does not exceed 100
    size.value++; // Increase grid size by 1
    size.textContent = size.value; // Update the displayed value
    } else alert("The grid size cannot exceed 100");
}

minusButton.onclick = () => {
    if (size.value > 16) {
        size.value--;
        size.textContent = size.value; // Update the displayed value
    } else alert("The grid size cannot be less than 16");
}

function toggleButtonText() {
    if (sketchpad.firstChild) { //if the sketchpad has at least one square in it
        button.textContent = "Clear Grid";
    } else { //if it's empty
        button.textContent = "Create Grid";
    }
}

button.onclick = () => {
    if (sketchpad.firstChild) clearGrid();
    else {
        createGrid(size.value);
        addMouseoverEvent();
    }
    toggleButtonText(); 
}

function addMouseoverEvent() {
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
    square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "#000";
        });
    });
}