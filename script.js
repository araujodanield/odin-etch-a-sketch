
function createPixels(size) {
    const canvas = document.getElementById("canvas");
    canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        let pixel = document.createElement("div");
        canvas.appendChild(pixel).classList.add("pixel");
    }
}

createPixels(25);