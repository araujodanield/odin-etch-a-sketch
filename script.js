const body = document.querySelector("body");
const canvas = document.getElementById("canvas");

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
clearBtn.style.backgroundColor = "white" //temporary just to know that it's active. Will be removed after I complete the other buttons logic.
const randomColorBtn = document.createElement("button");
randomColorBtn.textContent = "Rainbow Effect";
const shadowBtn = document.createElement("button");
shadowBtn.textContent = "Shadow Effect";
const eraserBtn = document.createElement("button");
eraserBtn.textContent = "Eraser";

body.appendChild(clearBtn).classList.add("btn");
body.appendChild(randomColorBtn).classList.add("btn");
body.appendChild(shadowBtn).classList.add("btn");
body.appendChild(eraserBtn).classList.add("btn");


let mouseIsClicked = false;
body.addEventListener("mousedown", () => {
    mouseIsClicked = !mouseIsClicked;
});
body.addEventListener("mouseup", () => {
    mouseIsClicked = false;
});

function createPixels(size) {
    canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        let pixel = document.createElement("div");
        pixel.style.border = "1px solid rgba(0, 0, 0, 0.1)";
        
        canvas.appendChild(pixel).classList.add("pixel");

        pixel.addEventListener("click", () => {
            pixel.style.backgroundColor = "black";
        })
        pixel.addEventListener("mouseover", () => {
            if (mouseIsClicked) {
                pixel.style.backgroundColor = "black";
            }
        })
        clearBtn.addEventListener("click", () => {
            pixel.style.backgroundColor = "";
        })
    }
}

createPixels(30);

