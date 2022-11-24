const canvas = document.getElementById("canvas");

function createPixels(size) {
    canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        let pixel = document.createElement("div");
        canvas.appendChild(pixel).classList.add("pixel");
        pixel.addEventListener("dragover", () => {
            pixel.style.backgroundColor = "black";
        })
    }
}

createPixels(65);
