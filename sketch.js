/************************
Code Self Portrait Assignment
By: Cellini Luong
This assignment is focused on translating self portrait sketches into P5.js
*************************/

//Global Variables
var gDebugMode = false;
var x = 299;
var y = 299;

// Setup code goes here
function setup() {
  createCanvas(600,600);
 }


function draw() {
	background(128, 128, 0);
	
	// Debug Mode
	if( gDebugMode == true ) {
		drawDebugInfo();
	}

	// Draw Facial Features
	drawHair();
	drawNeck();
	drawFace();
	drawLips();
	drawEyeball();
	drawIris();
	drawPupil();
	drawBrows();
	drawBangs();
	drawNose();
	drawBeautyMarks();
	}

function drawHair() {
	fill(10);
	noStroke();
	rect(x - 120, y-40, 240, 200);
	ellipse(x, y-40, 240, 300);
}

function drawNeck() {
	noStroke();
	fill(245, 222, 179);
	quad(x - 30, 324, x + 30, 324, x + 50, 394, x - 50, 394);
	ellipse(x, 396, 100, 60);
}

function drawFace() {
	fill(245, 222, 179);
	stroke(222, 184, 135);
	strokeWeight(2);
	ellipse(x, y - 60, 182, 232);
}	

function drawLips() {
	fill(240, 128, 128);
	stroke(205, 92, 92);
	strokeWeight(2);
	ellipse(x + 6, y - 10, 24, 14);
	ellipse(x - 6, y - 10, 24, 14);
	noStroke();
	ellipse(x , y - 6, 40, 18);
	stroke(205, 92, 92);
	line(281, 290, 317, 290);
}

function drawEyeball() {
	noStroke();
	fill(250, 250, 250);
	ellipse(x - 40, y - 80, 40, 24);
	ellipse(x + 40, y - 80, 40, 24);
}

function drawIris() {
	fill(119, 75, 30);
	ellipse(x - 40, y - 80, 24, 24);
	ellipse(x + 40, y - 80, 24, 24);
}

function drawPupil() {
	fill(0);
	ellipse(x - 40, y - 80, 12, 12);
	ellipse(x + 40, y - 80, 12, 12);
	fill(20);
}

function drawBrows() {
	stroke(30);
	strokeWeight(4);
	line(x + 18, y - 98, x + 48, y - 104);
	line(x + 48, y - 104, x + 64, y - 98);
	line(x - 18, y - 98, x - 48, y - 104);
	line(x - 48, y - 104, x - 64, y - 98);
}

function drawBangs() {
	fill(10);
	noStroke();
	triangle (x, y - 184, x - 100, y - 92, x - 70, y - 155);
	triangle (x, y - 184, x + 100, y - 92, x + 70, y - 155);
}

function drawNose() {
	// Nose
	stroke(222, 184, 135);
	strokeWeight(3);
	line(x, y - 52, x, y-86);
	line(x, y - 53, x - 8, y - 40);
	strokeWeight(4);
	point(x, y - 40);
	point(x + 6, y - 40);
}

function drawBeautyMarks() {
	stroke(50);
	strokeWeight(4);
	point(310, 231);
}	

//Draw debug mode
function drawDebugInfo() {
	fill(255);
	noStroke()
	text("x: " + mouseX + "  Y: " + mouseY, 20, height - 20);
}