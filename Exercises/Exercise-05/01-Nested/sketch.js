function setup(){

	createCanvas(1000, 1000);
}

function draw(){

	background(255);

	for(var x=0; x<= mouseX; x+=50){
		for(var y=0; y<=mouseY; y+=50){
				fill(x, y, random(255));
				ellipse(x, y, 50, 50);
		}
	}
}
