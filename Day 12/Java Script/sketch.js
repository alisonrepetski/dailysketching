
let a = 0;
var myFont;
var ltr;

function preload() {
  myFont = loadFont('Font/Akira Expanded Demo.otf');
}

function setup() {
  createCanvas(1000, 1000);
  background(0, 255, 238);
  frameRate(10)
  textFont(myFont)
  textSize(500)
  createLoop({duration:3, gif:true}) 
}

function draw() { 
  background(0, 255, 238);

  push();

  const columns = 23;
  const rows = 23;
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const x = c * cellWidth + cellWidth / 2;
      const y = r * cellHeight + cellHeight / 2;

      translate(width/2, height/2);
      rotate(a);
      drawSpike(x, y, min(cellWidth, cellHeight));
      a += 0.001;     
    }
  }

  pop();

  textSize(700);
  textAlign(CENTER, CENTER);
  fill(0, 255, 238);
  text('K', width/2, height/2);
}


function drawSpike(x, y) {
  const circleSize = (70, 90)
  const spikeSize = circleSize / 2;
  const spacing = spikeSize / 2;

  fill(149, 0, 255);
  noStroke()
  circle(x + spacing, y - spacing, spikeSize/1.5);
  circle(x - spacing, y + spacing, spikeSize/1.5);

  fill(255, 0, 144)
  circle(x, y, spikeSize);


}


function mousePressed() {
  saveCanvas("day-12-k", "png")
}  

