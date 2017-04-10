var dragging = false;
var rollover = false;

var x, y, w, h;          
var offsetX, offsetY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = 100;
  y = 100;

  w = 100;
  h = 100;
}

function draw() {
  background(255);
  

  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } 
  else {
    rollover = false;
  }
  

  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  stroke(255);

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

  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;

    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}

function mouseReleased() {

  dragging = false;
}
