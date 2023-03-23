var myFont;
var myFont2;
var fromColor;
var tooColor; 
var inBetweenColor; 
var scaledVal; 

var fromColor2;
var tooColor2; 
var inBetweenColor2; 


function preload() {
  myFont = loadFont('fonts/NexaRustSlab-BlackShadow01.otf');
  myFont2 = loadFont('fonts/Our Friend Electric.otf')
}

function setup() {
  createCanvas(1000, 1000);
  background(0);
  textFont(myFont);
  textSize(50);
  frameRate(20);
  fromColor = color(255,100,0); 
  tooColor = color(0,200,200); 
  inBetweenColor = color(255,0,0);
	scaledVal = 0;

  fromColor2 = color(0); 
  tooColor2 = color(255); 
  inBetweenColor2 = color(202, 255, 66);
	scaledVal = 0;

  ltr = new Letter(5, 0, 'K', 50, 20);
  ltr2 = new Letter(5, 90, 'K', 50, 20);
  ltr3 = new Letter(5, 135, 'K', 50, 20);
  ltr4 = new Letter(5, 180, 'K', 50, 20);
  ltr5= new Letter(5, 225, 'K', 50, 20);
  ltr6 = new Letter(5, 270, 'K', 50, 20);
  ltr7 = new Letter(5, 315, 'K', 50, 20);
  ltr8 = new Letter(5, 360, 'K', 50, 20);
  ltr9 = new Letter(5, 405, 'K', 50, 20);
  ltr10 = new Letter(5, 450, 'K', 50, 20);
  ltr11 = new Letter(5, 495, 'K', 50, 20);
  ltr12 = new Letter(5, 540, 'K', 50, 20);
  ltr13 = new Letter(5, 585, 'K', 50, 20);
  ltr14 = new Letter(5, 630, 'K', 50, 20);
  ltr15 = new Letter(5, 675, 'K', 50, 20);
  ltr16 = new Letter(5, 720, 'K', 50, 20);
  ltr17 = new Letter(5, 765, 'K', 50, 20);
  ltr18 = new Letter(5, 810, 'K', 50, 20);
  ltr19 = new Letter(5, 855, 'K', 50, 20);
  ltr20 = new Letter(5, 900, 'K', 50, 20);
  ltr21 = new Letter(5, 945, 'K', 50, 20);
  ltr22 = new Letter(5, 1033, 'K', 50, 20);

  blk = new Blocks(200, 140)
  blk2 = new Blocks(200, 220)
  blk3 = new Blocks(200, 310)
  blk4 = new Blocks(200, 400)
  blk5 = new Blocks(200, 490)
  blk6 = new Blocks(200, 580)
  blk7 = new Blocks(200, 670)
  blk8 = new Blocks(200, 760)

  blk9 = new Blocks(400, 355)
  blk10 = new Blocks(450, 270)
  blk11 = new Blocks(500, 175)
  
  
  blk12 = new Blocks(450, 450)
  blk13 = new Blocks(500, 540)
  blk14 = new Blocks(550, 630)
  blk15 = new Blocks(600, 720)
  blk16 = new Blocks(600, 760)

}

function draw() {
  
  ltr.display();
  ltr2.display();
  ltr3.display();
  ltr4.display();
  ltr5.display();
  ltr6.display();
  ltr7.display();
  ltr8.display();
  ltr9.display();
  ltr10.display();
  ltr11.display();
  ltr12.display();
  ltr13.display();
  ltr14.display();
  ltr15.display();
  ltr16.display();
  ltr17.display();
  ltr18.display();
  ltr19.display();
  ltr20.display();
  ltr21.display();
  ltr22.display();
  
  
  blk.display()
  blk2.display()
  blk3.display()
  blk4.display()
  blk5.display()
  blk6.display()
  blk7.display()
  blk8.display()

  blk9.display()
  blk10.display()
  blk11.display()
  blk12.display()
  blk13.display()
  blk14.display()
  blk15.display()
  blk16.display()

}

class Letter {
  constructor(x, y, letter, spacing, repetitions) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.spacing = spacing;
    this.repetitions = repetitions;
  }

  display() {
    push();
    translate(this.x, this.y);
    for (let i = 0; i < this.repetitions; i = i + 1) {
      text(this.letter, this.spacing * i, 0);
    }
    pop();
    scaledVal = map(mouseX, 0,width, 0,1); 

  inBetweenColor = lerpColor(fromColor,tooColor, scaledVal);
  
fill(inBetweenColor); 
  }
}


class Blocks {
  constructor(x, y) {
    this.x = x;
    this.y = y;
   
  }

  display() {
    scaledVal = map(mouseX, 0,width, 0,1); 
 
    inBetweenColor2 = lerpColor(fromColor2,tooColor2, scaledVal);
    
    fill(inBetweenColor2);
    noStroke();   
    rect(this.x, this.y, 150, 100)
  }
}


function mousePressed() {
  saveCanvas("day-8-k", "png")
}


    


  