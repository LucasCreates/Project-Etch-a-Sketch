
/////////////////////////////////////////////////////

//This creates the main container which will consist of buttons and the screen where the user can paint on.

const mainScreen = document.querySelector("#main-container")



/////////////////////////////////////////////////////

// The container created here to a set size of 700 px which later will be changable when learning responsiveness.
// This screen includes the squares that will immatate etch a sketch

const container = document.querySelector(".container")
const containerSize = 500
container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;


//////////////////////////////////////////////////////
const button = document.querySelectorAll(".btn")
let toggleSwitch = false; // this creates a switch for when clicking on screen to draw or not.

let checkMapSize; // this checks the amount of squares displayed (each button clicked will save its grid size to this var)
let squareOption = 0;
let checkColor = 0;
let isShade = false;


function createGrid(size){
    let gridSize = size * size;
    checkMapSize = size;
    for(i = 0; i < gridSize; i++){
        let square = document.createElement("div");
        square.style.width = `${(containerSize / size)}px`; // by using the equation containerSize / size, this allows the newly created 
        square.style.height = `${(containerSize / size)}px`; // divs to fit inside the container and no overlapping.
        square.classList.add("square");
        square.style.border = "1px solid rgba(255, 200, 190, 0.2";
       
        container.appendChild(square);

    }
    // console.log(`ToggleSwitch = ${toggleSwitch}`)
    container.addEventListener("click", paintSquares)  
    
};

createGrid(16);

// console.log(container.childNodes); //found right here, how to target the square divs.


function paintSquares(){
    const squares = document.querySelectorAll(".square");

    if(toggleSwitch == false){
        squares.forEach((square) => {
            square.addEventListener("mousemove", colorSquares)
            
            
        });
        toggleSwitch = true;
     
       
    }
    else {
        squares.forEach((square) => {
            square.removeEventListener("mousemove", colorSquares)
        });
        toggleSwitch = false;
        
    } 
}



for (const btn of button){
    btn.addEventListener("click", changeSquares)
              
}
function changeSquares(){
    // console.log(this.value)
    const btnOption = this.value;  
    toggleSwitch = false;
    switch (btnOption){
        case "eraser" :
            squareOption = 1;
          
            break; 

        case "black" :
            squareOption = 0;
            checkColor = 0;
            console.log(`The checkColor var is ${checkColor}`)
            console.log(`The squareOption var is ${squareOption}`)
            // checkMapSize = 32;
            // getChildNodes();
            // createGrid(32);
            break;

        case "clear":
            // squareOption = 0;
            getChildNodes();
            createGrid(checkMapSize);
            console.log("Remove color") ;
            break;  

        case "size":
            let userChoice = prompt("Choose a map size from 1 to 100");  
           
            checkMapSize = userChoice; 
            getChildNodes();
            createGrid(userChoice); 
            break; 

        case "color":
            squareOption = 3;
            checkColor = 1;
            anyColor(); 
            break;  

        case "shade":
            squareOption = 4;
            break;    

    }
}

function getChildNodes(){
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

function removeColor(){
    
    switch (checkMapSize){
              case checkMapSize :
          
            
            break;

    }
}

function anyColor(){

    const colorPick = document.querySelector(".color-picker");
    let color = colorPick.value;
    return color;
}



function colorSquares(){

    let setColor = anyColor()
    if(squareOption == 0){
        this.style.backgroundColor = "black";
        this.style.opacity = "1";
       
    }
    else if (squareOption == 1){
        this.style.backgroundColor = "rgba(243, 243, 243, 0.882)";
    }
    else if (squareOption == 3){
        this.style.backgroundColor = setColor;
        this.style.opacity = "1"; // having opacity = 1 here allows me to shade around it and over without deleting the previous squares.
    }
    else if (squareOption == 4){
        console.log(`The checkColor var is ${checkColor}`)
        if(checkColor == 0){
            console.log(`The checkColor var is ${checkColor}`)
            this.style.backgroundColor = "black"
            this.style.opacity -= "-0.1";   
        }
        else if (checkColor == 1){
            this.style.backgroundColor = setColor;
            this.style.opacity -= "-0.1";  
        }
             
    }
}

