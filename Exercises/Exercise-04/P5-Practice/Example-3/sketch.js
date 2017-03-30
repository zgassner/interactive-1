var x=0;
var y=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 255, 0);
    noStroke();
    fill(255, 0, 255);
  ellipse(x, y, 100, 100);
  x= x+10;

  if(x > width){
      x =0;
      y = y+50;
  }

  console.log(x);
  console.log(y);
}
