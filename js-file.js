const body = document.querySelector("body")
const container = document.querySelector("#container")
container.setAttribute("class","flex-container")


let createGrid = size => {

    const squareSize = (500 / size);

    for (n=0;n<size;n++) { //how many rows

        const row = document.createElement('div');
        row.setAttribute("class","flex-row");

        for(i=0; i<size; i++) { //how many squares in a row
            
            const square = document.createElement('div');
            square.setAttribute("class","flex-square");
            
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            
            //pen trail
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = 'blue'
            });

            row.appendChild(square);
            container.appendChild(row);
        }

    }

}//EOF

let deleteGrid = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

}//EOF


let initialSize = 16;

createGrid(initialSize); //base grid

const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const inputSize = input.value;
    if (!Number.isInteger(parseInt(inputSize))) {
        alert("Not a number!");
    } else if (parseInt(inputSize) > 101) {
        alert("Too big!");
    } else { 
        deleteGrid();
        createGrid(inputSize);
    }
});



