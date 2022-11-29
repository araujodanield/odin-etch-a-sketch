const body = document.querySelector("body");
const canvas = document.getElementById("canvas");

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
const blackBtn = document.createElement("button");
blackBtn.textContent = "Black";
const randomBtn = document.createElement("button");
randomBtn.textContent = "Random Effect";
const shadowBtn = document.createElement("button");
shadowBtn.textContent = "Shadow Effect";
const eraserBtn = document.createElement("button");
eraserBtn.textContent = "Eraser";

body.appendChild(clearBtn).classList.add("btn");
body.appendChild(blackBtn).classList.add("btn");
body.appendChild(randomBtn).classList.add("btn");
body.appendChild(shadowBtn).classList.add("btn");
body.appendChild(eraserBtn).classList.add("btn");


let mouseIsClicked;
body.addEventListener("mousedown", () => {
    mouseIsClicked = true;
});
body.addEventListener("mouseup", () => {
    mouseIsClicked = false;
});


function createPixels(size) {
    canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        let px = document.createElement("div");
        px.style.border = "1px solid rgba(0, 0, 0, 0.1)";
        
        canvas.appendChild(px).classList.add("pixel");
    }
};
createPixels(35);


const pixels = document.querySelectorAll(".pixel");
pixels.forEach (pixel => {
    pixel.addEventListener("mousedown", () => {
        pixel.style.backgroundColor = "black";
    })
    pixel.addEventListener("mouseover", () => {
        if (mouseIsClicked) {
            pixel.style.backgroundColor = "black";
        }
    })
});


function clearCanvas() {
    clearBtn.addEventListener("click", () => {
        pixels.forEach (pixel => {
            pixel.style.backgroundColor = "";
            })
        })
};

function blackPen() {
    blackBtn.addEventListener("click", () => {
        pixels.forEach (pixel => {
            pixel.addEventListener("mousedown", () => {
                pixel.style.backgroundColor = "black";
            })
            pixel.addEventListener("mouseover", () => {
                if (mouseIsClicked) {
                    pixel.style.backgroundColor = "black";
                }
            })
        })
    })
};

function randomPen() {
    randomBtn.addEventListener("click", () => {
        pixels.forEach (pixel => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            pixel.addEventListener("mousedown", () => {
                pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            })
            pixel.addEventListener("mouseover", () => {
                if (mouseIsClicked) {
                    pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                }
            })
        })
    })
};

function shadowPen() { // At the moment it's just picking a random opacity between 0 and 1. The correct is stay at 0.1 and increase the opacity with each interaction.
    shadowBtn.addEventListener("click", () => {
        pixels.forEach (pixel => {
            let randomValue = Math.random();
            pixel.addEventListener("mousedown", () => {
                pixel.style.backgroundColor = `rgba(0, 0, 0, ${randomValue})`;
            })
            pixel.addEventListener("mouseover", () => {
                if (mouseIsClicked) {
                    pixel.style.backgroundColor = `rgba(0, 0, 0, ${randomValue})`;
                }
            })
        })
    })
};

function pixelEraser() {
    eraserBtn.addEventListener("click", () => {
        pixels.forEach (pixel => {
            pixel.addEventListener("mousedown", () => {
                pixel.style.backgroundColor = "";
            })
            pixel.addEventListener("mouseover", () => {
                if (mouseIsClicked) {
                    pixel.style.backgroundColor = "";
                }
            })
        })
    })
};


clearCanvas();
blackPen();
randomPen();
shadowPen();
pixelEraser();