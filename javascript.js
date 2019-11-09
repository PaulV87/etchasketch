const container = document.querySelector("#container")
const resetButtonClick = document.querySelector("#resetButton");

resetButtonClick.onclick = reset;


function addTableElements(elements){
    container.style.gridTemplateColumns = `repeat(${elements}, auto)`;
    container.style.gridTemplateRows = `repeat(${elements}, auto)`;

    
    // create squares 
    let totalElements = elements * elements;
    for (let i = 0; i < totalElements; i++) {
        const divSquare = document.createElement("div");
        divSquare.classList.add("grid-item");
      
        
        // event listener
        divSquare.addEventListener('mouseover', function(e){
            console.log("eventTrigger")
     
            // set black color and its lightness
            e.target.style.backgroundColor = 'black';
          
        });
        container.appendChild(divSquare);    
    }
    console.log("addTable Elements")
}

function clear(){
    console.log("clear");
    let i = 0;
    const divSquares = document.querySelectorAll(".grid-item");
    console.log(divSquares);
    divSquares.forEach((square) => {
        i++;
        console.log(i);
        square.remove();
    });
}

function reset(){
    console.log("reset");
    clear();

    const gridsize = prompt("How big do you want the grid to be?");
    addTableElements(gridsize);
}

addTableElements(16);

