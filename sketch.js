//Variables
var x = 25;
var h = 20;


// Setup code goes here
function setup() {
  createCanvas(480,120);
  noStroke();
 }


// Draw code goes here
function draw() {
	background(204);
	for (var y = 0; y <= height; y += 40) {
		for (var x = 0; x <= width; x += 40) {
			fill(255, 140);
			ellipse(x, y, 40, 40);
		}
	}
}