var img;
var canvas01;

function setup() {

  canvas01 = createCanvas(600, 600);
  //canvas01.position(200, 600);
  canvas01.parent('sketch-container');
  //canvas01.class('square');
  //canvas01.id('square');

}

function draw() {

  fill('pink');
  rect(random(0,1000), random(0,1000), 20, 20);
}
