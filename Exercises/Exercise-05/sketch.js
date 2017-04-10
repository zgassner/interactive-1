// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, w, h;          // Location and size
var offsetX, offsetY;    // Mouseclick offset

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Starting location
  x = 100;
  y = 100;
  // Dimensions
  w = 75;
  h = 50;
}

function draw() {
  background(255);
  
  
  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } 
  else {
    rollover = false;
  }
  
  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  stroke(255);
  // Different fill based on state
  if (dragging) {
    fill (255, 0, 0);
  } else if (rollover) {
    fill(255, 0, 0);
  } else {
    fill(0, 0, 255);
  }
  textSize(50);
  textFont("Courier");
  text("CUT/UP", x, y, w, h);
}

function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}
