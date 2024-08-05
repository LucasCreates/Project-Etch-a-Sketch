
/////////////////////////////////////////////////////

//This creates the main container which will consist of buttons and the screen where the user can paint on.

const mainScreen = document.querySelector("#main-container")
const toggle = document.querySelector("#toggle")

/////////////////////////////////////////////////////

// The container created here to a set size of 700 px which later will be changable when learning responsiveness.
// This screen includes the squares that will immatate etch a sketch

const container = document.querySelector(".container")
const containerSize = 500;
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;





//////////////////////////////////////////////////////
const button = document.querySelectorAll(".btn");


let checkMapSize; // this checks the amount of squares displayed (each button clicked will save its grid size to this var)
let paintOption = 0;
let isShade = false;
let isRandom = false;
let mousePressed = false;



container.addEventListener("mousedown", () =>{
    return mousePressed = true;
})
container.addEventListener("mouseup", () =>{
    return mousePressed = false;
})


function createGrid(size){
    let gridSize = size * size;
    checkMapSize = size;

    for(i = 0; i < gridSize; i++){
        const square = document.createElement("div");
        square.style.width = `${(containerSize / size)}px`; // by using the equation containerSize / size, this allows the newly created 
        square.style.height = `${(containerSize / size)}px`; // divs to fit inside the container and no overlapping.
        square.classList.add("square");
        container.addEventListener("mouseover", paintSquares)  
        container.addEventListener("mousedown", paintSquares) 
         
        container.appendChild(square);

    }

    
    
};




function changeSize(){
   
    console.log(toggle.value)
    getChildNodes();
    createGrid(toggle.value);
}


// console.log(container.childNodes); //found right here, how to target the square divs.


function paintSquares(e){
    if (e.type === 'mouseover' && !mousePressed) return

    if (paintOption === 0){
        
        e.target.style.backgroundColor = anyColor();
        e.target.style.opacity = "1"
       
    }
    else if (paintOption === 1) {
        if(isRandom === true){
            e.target.style.backgroundColor = randomColor();
            e.target.style.opacity -= "-0.075";   
        }
        else {
            e.target.style.backgroundColor = anyColor();
            e.target.style.opacity -= "-0.075";  
        }
        
    }
    else if (paintOption === 2) {
        e.target.style.backgroundColor = anyColor()
        e.target.style.opacity -= "0.2";  
        
    }
    else if (paintOption === 3){
       
        e.target.style.backgroundColor = randomColor();
      
    }
    

}



for (const btn of button){
    btn.addEventListener("click", options)
              
}
function options(){
    console.log(this.value)
    const btnOption = this.value;  
    switch (btnOption){
        case "color":
            isRandom = false;
            console.log(isRandom)
            paintOption = 0;
            break; 
        case "shade":
            paintOption = 1;
            break;     
        case "eraser" :
            paintOption = 2;
            break; 
        case "random" :
            // isRandom = false;
            isRandom = true
            console.log(isRandom)
            paintOption = 3;
            break; 
        case "clear":
            getChildNodes();
            createGrid(checkMapSize);
            break;     
    }
}

function randomColor(){
    const randColor = document.querySelector(".multi");
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}

function getChildNodes(){
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

function anyColor(){
    const colorPick = document.querySelector(".color-picker");
    let color = colorPick.value;
    return color;
}

createGrid(16);