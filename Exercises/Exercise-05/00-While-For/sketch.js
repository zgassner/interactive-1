var offset =0;

function setup(){
	createCanvas(1000, 1000);
}

function draw (){

	//background(0, 0, 255);
var x = 0;
while( x <= width){

	fill(random(255), random(255), random(255));
	ellipse(x, 200, 50, 50);
	x = x+50;

	//print(x);
	console.log(x);
	}

for(var a = 0; a <=width; a+=50){

		fill(a, a, a);
		ellipse(a+offset, 400, 50, 50);
		print(a);
	}

offset = offset+1;
}
