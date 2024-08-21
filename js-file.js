const container = document.querySelector("#container")
container.setAttribute("class","flex-container")

let createGrid = size => {

    for (n=0;n<size;n++) { //how many rows

        const row = document.createElement('div');
        row.setAttribute("class","flex-row");

        for(i=0; i<size; i++) { //how many squares in a row
            
            const square = document.createElement('div');
            square.setAttribute("class","flex-square");

            square.addEventListener("mouseover", () => {
                square.setAttribute("style","background-color:blue")
            });


            row.appendChild(square);
            container.appendChild(row);
        }

    }

}//EOF
 



createGrid(16);