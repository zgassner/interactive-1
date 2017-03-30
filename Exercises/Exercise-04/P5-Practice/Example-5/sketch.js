var img;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(255);
  img = createImg("blue.jpg");
}

function draw() {

  image(img, 0,0);
}
