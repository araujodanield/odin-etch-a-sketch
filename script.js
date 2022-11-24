const body = document.querySelector("body");
const canvas = document.getElementById("canvas");
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
    }
}

createPixels(65);
