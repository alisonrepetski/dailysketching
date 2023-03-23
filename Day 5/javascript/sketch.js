let myFont;

function preload() {
  myFont = loadFont('Font/Cowboys 2.0.otf');
}

function setup() {
  createCanvas(1000, 1000, WEBGL);  
  background(54, 61, 58);
  createLoop({ duration: 10, gif: true })
  frameRate(50);


}

function draw() {
    background(54, 61, 58);
    translate(-100, -100, 100);
    normalMaterial();

    push();
    rotateZ(frameCount * 0.02);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(44, 242, 156, 200);
    textFont(myFont);
    textSize(400);
    text("K", 70, 70, 70);
    pop(); 
  }
  
function mousePressed() {
    saveCanvas("day-10-k", "png")
}

