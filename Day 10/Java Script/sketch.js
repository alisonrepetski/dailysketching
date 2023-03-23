var myFont;
var fromColor;
var toColor;
var inBetweenColor;
var scaledVal;

function preload() {
  myFont = loadFont('fonts/Our Friend Electric.otf');
}

function setup() {
  createCanvas(1000, 1000);
  background(0);
  textFont(myFont);
  textSize(500);
  frameRate(20);
  fromColor = color(202, 252, 3);
  toColor = color(147, 59, 255);
  scaledVal = 0;

  ltr = new Letter(-100, 150, 'K', 10, 50);
  ltr2 = new Letter(-300, 550, 'K', 10, 300);
  ltr3 = new Letter(-300, 850, 'K', 10, 300);
  ltr4 = new Letter(-300, -650, 'K', 10, 300);
  ltr5 = new Letter(-300, -1250, 'K', 10, 300);

  ltr6 = new Letter(400, 650, 'K', 10, 50);
}

function draw() {
  ltr6.display();

  ltr.display();
  ltr2.display();
  ltr3.display();
  ltr4.display();
  ltr5.display();
}

class Letter {
  constructor(x, y, letter, spacing, repetitions) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.spacing = spacing;
    this.repetitions = repetitions;
    this.fromColor = color(255, 100, 0); 
    this.tooColor = color(0, 200, 200); 
  }

  display() {
    push();
    translate(this.x, this.y);
    for (let i = 0; i < this.repetitions; i++) {
      let scaledVal = map(i, 0, this.repetitions -1, 0, 1) ; // use i to generate scaledVal
      let inBetweenColor = lerpColor(this.fromColor, this.tooColor, scaledVal);
      fill(inBetweenColor); 
      stroke(255)
      strokeWeight(10)
      text(this.letter, this.spacing * i, i * this.spacing);
    }
    pop();
  }
}

function mousePressed() {
  saveCanvas("day-9-k", "png")
}  