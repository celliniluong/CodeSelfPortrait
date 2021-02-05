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
	background(205);
	
	// Debug Mode
	if( gDebugMode == true ) {
		drawDebugInfo();
	}

	// Hair
	fill(100);
	rect(x - 120, y-40, 240, 200);
	ellipse(x, y-40, 240, 300);

	// Face
	fill(50);
	ellipse(x, y - 60, 200, 230);

	// Neck
	quad(x - 30, 324, x + 30, 324, x + 50, 394, x - 50, 394);
	ellipse(x, 396, 100, 60);

	
}



//Draw debug mode
function drawDebugInfo() {
	fill(255);
	text("x: " + mouseX + "  Y: " + mouseY, 20, height - 20);
}