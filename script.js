const body = document.querySelector("body");
const canvas = document.getElementById("canvas");

const colorBtn = document.createElement("input");
colorBtn.type = "color";
const blackBtn = document.createElement("button");
blackBtn.textContent = "Black";
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
let number = document.createElement("p")
number.textContent = "Select a size"
number.style.color = "white"

body.appendChild(colorBtn).classList.add("btn");
body.appendChild(blackBtn).classList.add("btn");
body.appendChild(randomBtn).classList.add("btn");
body.appendChild(shadowBtn).classList.add("btn");
body.appendChild(eraserBtn).classList.add("btn");
body.appendChild(clearBtn).classList.add("btn");
body.appendChild(sizeSelector).classList.add("btn");
body.appendChild(number)


// Logic to apply on the canvas. By setting this, the user can only draw when the left mouse button is pressed.
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
createPixels(16);

function sizeSelect() {
    sizeSelector.addEventListener("mousemove", () => {
        number.textContent = sizeSelector.value + " X " + sizeSelector.value;
    })
    sizeSelector.addEventListener("change", () => {
        const pixelAmount = body.querySelectorAll(".pixel")
        pixelAmount.forEach (currentPx => {
            currentPx.remove();
        });
        createPixels(sizeSelector.value)
    })
};
sizeSelect();


const pixels = document.querySelectorAll(".pixel");

// The default pen when the page is loaded.
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

// Allow the user to select a custom color for the pen and copy colors on the page.
function colorPicker() {
    colorBtn.addEventListener("click", () => {
        pixels.forEach (pixel => {
            pixel.addEventListener("mousedown", () => {
                pixel.style.backgroundColor = colorBtn.value;
            })
            pixel.addEventListener("mouseover", () => {
                if (mouseIsClicked) {
                    pixel.style.backgroundColor = colorBtn.value;
                }
            })
        })
    })
};

// A simple black pen.
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


// Add a random color for each pixel on the interaction. To add a new color to a pixel that was already painted the user need to click the button again.
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

// A pen that adds 0.1 opacity to the pixel and increases this value in each interaction.
// OBS: There are lot of ways to make this logic with fewer lines, but due I'm trying to make this the most "beginner friendly" and visual possible, I opted for an if else statement.
// It's possible to make this same "visual" logic using the switch statement, but it will be a little longer than the if else.
function shadowPen() { 
    shadowBtn.addEventListener("click", () => {
        pixels.forEach (pixel => {
            let opacity = 0.1
            pixel.addEventListener("mousedown", () => {
                pixel.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
                if (opacity === 0.1) {
                    opacity = 0.2
                } else if (opacity === 0.2) {
                    opacity = 0.3
                } else if (opacity === 0.3) {
                    opacity = 0.4
                } else if (opacity === 0.4) {
                    opacity = 0.5
                } else if (opacity === 0.5) {
                    opacity = 0.6
                } else if (opacity === 0.6) {
                    opacity = 0.7
                } else if (opacity === 0.7) {
                    opacity = 0.8
                } else if (opacity === 0.8) {
                    opacity = 0.9
                } else if (opacity === 0.9) {
                    opacity = 1
                };
            })
            pixel.addEventListener("mouseover", () => {
                if (mouseIsClicked) {
                    pixel.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
                    if (opacity === 0.1) {
                        opacity = 0.2
                    } else if (opacity === 0.2) {
                        opacity = 0.3
                    } else if (opacity === 0.3) {
                        opacity = 0.4
                    } else if (opacity === 0.4) {
                        opacity = 0.5
                    } else if (opacity === 0.5) {
                        opacity = 0.6
                    } else if (opacity === 0.6) {
                        opacity = 0.7
                    } else if (opacity === 0.7) {
                        opacity = 0.8
                    } else if (opacity === 0.8) {
                        opacity = 0.9
                    } else if (opacity === 0.9) {
                        opacity = 1
                    }
                }
            })
        })
    })
};

// Allow the user to delete pixels color individually.
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

// Clear the canvas by removing the color of all pixels.
function clearCanvas() {
    clearBtn.addEventListener("click", () => {
        pixels.forEach (pixel => {
            pixel.style.backgroundColor = "";
        })
    })
};

colorPicker();
blackPen();
randomPen();
shadowPen();
pixelEraser();
clearCanvas();