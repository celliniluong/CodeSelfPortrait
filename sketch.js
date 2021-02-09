/********
Code Self Portrait Assignment
By: Cellini Luong
This assignment is focused on translating self portrait sketches into P5.js
********/

//Global
var gDebugMode = true;
var x = 299;
var y = 299;

// Setup code goes here
function setup() {
  createCanvas(600,600);
  noStroke();
 }


// Background
function draw() {
	background(128, 128, 0);
	
	// Debug Mode
	if( gDebugMode == true ) {
		drawDebugInfo();
	}

	// Hair
	fill(10);
	noStroke();
	rect(x - 120, y-40, 240, 200);
	ellipse(x, y-40, 240, 300);


	// Face
	fill(245, 222, 179);
	ellipse(x, y - 60, 192, 230);

	// Neck
	quad(x - 30, 324, x + 30, 324, x + 50, 394, x - 50, 394);
	ellipse(x, 396, 100, 60);

	// Lips
	fill(240, 128, 128);
	ellipse(x + 6, y - 10, 24, 14);
	ellipse(x - 6, y - 10, 24, 14);
	ellipse(x , y - 6, 40, 18);

	// Eyeshape
	fill(250, 250, 250);
	ellipse(x - 40, y - 80, 40, 24);
	ellipse(x + 40, y - 80, 40, 24);
	
	// Eyeball
	fill(119, 75, 30);
	ellipse(x - 40, y - 80, 24, 24);
	ellipse(x + 40, y - 80, 24, 24);

	// Pupil
	fill(0);
	ellipse(x - 40, y - 76, 12, 12);
	ellipse(x + 40, y - 76, 12, 12);
	fill(20);

	// Brows
	stroke(50);
	strokeWeight(4);
	line(x + 18, y - 98, x + 48, y - 104);
	line(x + 48, y - 104, x + 64, y - 98);
	line(x - 18, y - 98, x - 48, y - 104);
	line(x - 48, y - 104, x - 64, y - 98);

	// Bangs
	fill(10);
	noStroke();
	triangle (x, y - 184, x - 100, y - 92, x - 70, y - 155);
	triangle (x, y - 184, x + 100, y - 92, x + 70, y - 155);

	drawNose();
	
	}

	

function drawNose(){
	// Nose
	stroke(222, 184, 135);
	strokeWeight(3);
	line(x, y - 60, x, y-80);
	line(x, y - 61, x - 8, y - 48);

}	



//Draw debug mode
function drawDebugInfo() {
	fill(255);
	noStroke()
	text("x: " + mouseX + "  Y: " + mouseY, 20, height - 20);
}