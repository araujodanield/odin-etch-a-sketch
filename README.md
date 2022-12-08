<img height="15px" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-brazil_1f1e7-1f1f7.png">[  Leia este documento em português](README.br.md)

# Etch-a-Sketch - The Pixel Art Maker

Fourth project of <a href="https://www.theodinproject.com/about">The Odin Project</a> course.

This is a drawing app based on the Etch-a-Sketch toy that allows you to create pixel art on a canvas that goes from 2x2 to 100x100 pixels. 

As an extra challenge to the project, I've made almost every HTML element of the page using DOM manipulation. 

The logic applied on the canvas uses CSS Grid to allow all the pixels to fill the canvas and apply the same size for each one automatically.

### <a href="https://araujodanield.github.io/odin-etch-a-sketch/" target="_blank">You can look the page and create your pixel art by clicking here!</a>

</br>

## About the Page and the Drawing Tools:

When you open the page you will see a title, a subtitle, a footer with the link to my GitHub, and two main elements: a canvas with the size of 800x800 and 16 pixels, and a toolbar with seven interactive options. Here's a brief resume about each page's element:

- <b><u>Canvas</u></b>: The main focus of the page. As said before it's an 800x800 square that never changes your size, and only receives new amounts of pixels;

- <b><u>Color Wheel</u></b>: A color selector for your pen that is made using `<input type="color">`. This allows you to choose any color you want and also copy any color that is visible on your screen<sup>[1]</sup>. The default color of the pen and the wheel when you load the page is a purplish black;

- <b><u>Black Pen</u></b>: This is a shortcut so you don't need to select the full black color every time you need it;

- <b><u>Random Effect</u></b>: A pen that gives each pixel a new random color each time you pass through them<sup>[2]</sup>. The logic of this option is made using `Math.random()`;

- <b><u>Shadow Effect</u></b>: A pen that applies a black color with 0.1 opacity and each time you pass through the pixel the value increases by 0.1 until reaches 1 and turns the pixel a full black. Unfortunately, you cannot use this pen on top of an already painted pixel, this will delete the color and apply the black 0.1;

- <b><u>Eraser</u></b>: Allow you to erase each pixel individually by resetting them to the default style;

- <b><u>Clear</u></b>: Resets all the pixels on the canvas to their default style;

- <b><u>Size Slider</u></b>: This slider represents the pixel amount on the canvas, and goes from 2x2 to 100x100. When you load the page this will be 16x16 which is also the default size of the canvas. You can move the slider to select the pixel amount you want and the canvas will remain the same until you release the click button;

- <b><u>Size Display</u></b>: This is a non-interactive text element that just shows you the value of the size slider.

</br>

## Notes:

<b>[1]</b>: I've tested this project on three browsers: Google Chrome, Microsoft Edge, and Opera GX. For some reason on Opera, the Color Picker doesn't work, you click it and nothing happens. I don't know if this is a problem with the browser itself or with my computer. I've tried some solutions but without success, maybe in the future I create a button that makes this same function.

<b>[2]</b>: The random effect is applied only when you move the mouse through the pixels. A single click on the pixel will apply the color of the last pen you used, so let's say you used a red pen before selecting the random effect, your "click color" will be always red.
