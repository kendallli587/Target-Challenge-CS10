// Target Challenge

// Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// HTML Elements
let centerXInput = document.getElementById("centerX");
let centerYInput = document.getElementById("centerY");
let radiusInput = document.getElementById("radius");
let numRingsInput = document.getElementById("numRings");

// Circle Variables
let circleX;
let circleY;
let radius;
let radiusDiff;

function drawCircle() {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI);
    ctx.stroke();
}


requestAnimationFrame(draw);
function draw() {
    // Update Circle variables
    circleX = centerXInput.value;
    circleY = centerYInput.value;
    radius = radiusInput.value;
    numRings = numRingsInput.value;

    // Clear Canvas before drawing
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    radiusDiff = radius / numRings;
    
    for (let n = 1; n <= numRings; n++) {
        drawCircle();

    
        radius = radius - radiusDiff;
    }

    requestAnimationFrame(draw);
}


