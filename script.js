/// CREATE HTML ELEMENTS

const body = document.querySelector("body");
const header = document.getElementById("header");
const canvas = document.getElementById("canvas");
const buttons = document.getElementById("buttons");
const footer = document.getElementById("footer");


const title = document.createElement("h1")
title.textContent = "Etch-a-Sketch"

const colorBtn = document.createElement("input");
colorBtn.type = "color";
colorBtn.value = "#494752";

const blackBtn = document.createElement("button");
blackBtn.textContent = "Black Pen";

const randomBtn = document.createElement("button");
randomBtn.textContent = "Random Effect";

const shadowBtn = document.createElement("button");
shadowBtn.textContent = "Shadow Effect";

const eraserBtn = document.createElement("button");
eraserBtn.textContent = "Eraser";

const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";

const sizeSelector = document.createElement("input");
sizeSelector.type = "range";
sizeSelector.min = 2;
sizeSelector.max = 100;
sizeSelector.defaultValue = 16;

let sizeNum = document.createElement("p");
sizeNum.textContent = sizeSelector.value + " X " + sizeSelector.value;
sizeNum.style.color = "white";

const footText = document.createElement("p");
footText.textContent = "Created by";

const githubIcon = document.createElement("i");
githubIcon.classList.add("devicon-github-original");
githubIcon.textContent = " araujodanield";

const github = document.createElement("a")
github.setAttribute("href", "https://github.com/araujodanield");
github.setAttribute("target", "_blank");
github.appendChild (githubIcon);


header.appendChild(title);
buttons.appendChild(colorBtn).classList.add("btn", "color-btn");
buttons.appendChild(blackBtn).classList.add("btn", "black-btn");
buttons.appendChild(randomBtn).classList.add("btn", "random-btn");
buttons.appendChild(shadowBtn).classList.add("btn", "shadow-btn");
buttons.appendChild(eraserBtn).classList.add("btn", "eraser-btn");
buttons.appendChild(clearBtn).classList.add("btn", "clear-btn");
buttons.appendChild(sizeSelector).classList.add("size-slider");
buttons.appendChild(sizeNum).classList.add("size-text");
footer.appendChild(footText);
footer.appendChild(github);



/// CREATE CANVAS

// Add a pixel amount to the canvas with CSS Grid to give all pixels the same size.
function createPixels(size) {
    canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        let px = document.createElement("div");
        px.style.border = "1px solid rgba(0, 0, 0, 0.1)";
        
        canvas.appendChild(px).classList.add("pixel");
    }
};

// Default size when the page is loaded: 16x16.
createPixels(sizeSelector.value);



/// DRAWING TOOLS

// Select all the divs created by createPixels function.
let pixels = document.querySelectorAll(".pixel");

// Applied on the canvas. With this, the user can only draw when the left mouse button is pressed.
let mouseIsClicked;
window.addEventListener("mousedown", () => {
    mouseIsClicked = true;
});
window.addEventListener("mouseup", () => {
    mouseIsClicked = false;
});

// Applied on buttons. Remove the "pressed" style from other buttons when the user press a new one.
function removePreviousPressed() {
    if (colorBtn) {
        blackBtn.classList.remove("active");
        randomBtn.classList.remove("active");
        shadowBtn.classList.remove("active");
        eraserBtn.classList.remove("active");
    };
    if (blackBtn) {
        colorBtn.classList.remove("active");
        randomBtn.classList.remove("active");
        shadowBtn.classList.remove("active");
        eraserBtn.classList.remove("active");
    };
    if (randomBtn) {
        colorBtn.classList.remove("active");
        blackBtn.classList.remove("active");
        shadowBtn.classList.remove("active");
        eraserBtn.classList.remove("active");
    };
    if (shadowBtn) {
        colorBtn.classList.remove("active");
        blackBtn.classList.remove("active");
        randomBtn.classList.remove("active");
        eraserBtn.classList.remove("active");
    };
    if (eraserBtn) {
        colorBtn.classList.remove("active");
        blackBtn.classList.remove("active");
        randomBtn.classList.remove("active");
        shadowBtn.classList.remove("active");
    };
};


// Default pen when the page is loaded.
function defaultPen() {
    pixels.forEach (pixel => {
        pixel.addEventListener("mousedown", () => {
            pixel.style.backgroundColor = colorBtn.value;
        });
        pixel.addEventListener("mouseover", () => {
            if (mouseIsClicked) {
                pixel.style.backgroundColor = colorBtn.value;
            };
        });
    });
};

// Allow the user to select a custom color or copy any color on screen.
function colorPicker() {
    colorBtn.addEventListener("click", () => {
        removePreviousPressed();
        colorBtn.classList.add("active");

        pixels.forEach (pixel => {
            pixel.addEventListener("mousedown", () => {
                pixel.style.backgroundColor = colorBtn.value;
            });
            pixel.addEventListener("mouseover", () => {
                if (mouseIsClicked) {
                    pixel.style.backgroundColor = colorBtn.value;
                };
            });
        });
    });
};

// A black pen.
function blackPen() {
    blackBtn.addEventListener("click", () => {
        removePreviousPressed();
        blackBtn.classList.add("active");

        pixels.forEach (pixel => {
            pixel.addEventListener("mousedown", () => {
                pixel.style.backgroundColor = "black";
            });
            pixel.addEventListener("mouseover", () => {
                if (mouseIsClicked) {
                    pixel.style.backgroundColor = "black";
                };
            });
        });
    });
};

// Add a random color for each pixel on interaction.
function randomPen() {
    randomBtn.addEventListener("click", () => {
        removePreviousPressed();
        randomBtn.classList.add("active");

        pixels.forEach (pixel => {
            pixel.addEventListener("mousedown", () => {
                pixel.style.backgroundColor = "none";
            });
            pixel.addEventListener("mouseover", () => {
                let r = Math.floor(Math.random() * 255);
                let g = Math.floor(Math.random() * 255);
                let b = Math.floor(Math.random() * 255);
                if (mouseIsClicked) {
                    pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                };
            });
        });
    });
};

// Adds black color with 0.1 opacity to the pixel and increases its value on each interaction until reach 1.
// OBS: There are many ways to do this logic with less code, but to make this the most visual and "beginner friendly" possible, I opted for an 'if else' statement.
function shadowPen() {
    shadowBtn.addEventListener("click", () => {
        removePreviousPressed();
        shadowBtn.classList.add("active");

        pixels.forEach (pixel => {
            let opacity = 0.1;
            let changeOpacity = () => {
                if (opacity === 0.1) {
                    opacity = 0.2;
                } else if (opacity === 0.2) {
                    opacity = 0.3;
                } else if (opacity === 0.3) {
                    opacity = 0.4;
                } else if (opacity === 0.4) {
                    opacity = 0.5;
                } else if (opacity === 0.5) {
                    opacity = 0.6;
                } else if (opacity === 0.6) {
                    opacity = 0.7;
                } else if (opacity === 0.7) {
                    opacity = 0.8;
                } else if (opacity === 0.8) {
                    opacity = 0.9;
                } else if (opacity === 0.9) {
                    opacity = 1;
                };
            };
            pixel.addEventListener("mousedown", () => {
                pixel.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
                changeOpacity();
            });
            pixel.addEventListener("mouseover", () => {
                if (mouseIsClicked) {
                    pixel.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
                    changeOpacity();
                };
            });
        });
    });
};

// Allow the user to delete pixel color individually.
function pixelEraser() {
    eraserBtn.addEventListener("click", () => {
        removePreviousPressed();
        eraserBtn.classList.add("active");

        pixels.forEach (pixel => {
            pixel.addEventListener("mousedown", () => {
                pixel.style.backgroundColor = "";
            });
            pixel.addEventListener("mouseover", () => {
                if (mouseIsClicked) {
                    pixel.style.backgroundColor = "";
                };
            });
        });
    });
};

// Clear the canvas by removing the color of all pixels.
function clearCanvas() {
    clearBtn.addEventListener("click", () => {
        pixels.forEach (pixel => {
            pixel.style.backgroundColor = "";
        });
    });
};



/// CHANGE THE PIXEL AMOUNT IN THE CANVAS

// Allow the user to select a new size for the canvas, delete all the current pixel divs and then call the updateCanvas function.
function sizeSelect() {
    sizeSelector.addEventListener("mousemove", () => {
        sizeNum.textContent = sizeSelector.value + " X " + sizeSelector.value;
    });
    sizeSelector.addEventListener("change", () => {
        const pixelAmount = body.querySelectorAll(".pixel")
        pixelAmount.forEach (currentPx => currentPx.remove());
        updateCanvas();
    });
};

// Apply the selection from the size slider and re-select the class of the new pixels to allow the drawing tools to work.
function updateCanvas() {
    createPixels(sizeSelector.value);
    pixels = document.querySelectorAll(".pixel");
    defaultPen();
};



/// Call all the tools functions.
defaultPen();
colorPicker();
blackPen();
randomPen();
shadowPen();
pixelEraser();
clearCanvas();
sizeSelect();