var myFont; 
var k = 0; 
var arc; 
var arc2; 
var arc3;
var arc4; 
var arc5; 
var arc6;
var arc7;

var arc8; 
var arc9; 
var arc10;
var arc11; 
var arc12; 
var arc13;
var arc14;

var arc23;

var arc24;

var arc25;




function preload() {
    myFont = loadFont('fonts/coolvetica crammed rg.otf')
   

}

function setup() { 
    createCanvas(1000, 1000);
    background(175, 255, 36); 
    textFont(myFont); 
    textSize(200)
    angleMode(DEGREES);
    frameRate(20);
    createLoop({duration:3, gif:true})

    
    arc = new Arc(200, 200)
    arc2 = new Arc(200, 300)
    arc3 = new Arc(200, 400)
    arc4 = new Arc(200, 500)
    arc5 = new Arc(200, 600)
    arc6 = new Arc(200, 700)
    arc7 = new Arc(200, 800)

    arc8 = new Arc(250, 250)
    arc9 = new Arc(250, 350)
    arc10 = new Arc(250, 450)
    arc11 = new Arc(250, 550)
    arc12 = new Arc(250, 650)
    arc13 = new Arc(250, 750)
    arc14 = new Arc(200, 800)

    arc15 = new Arc2(400, 150)

    

    arc23 = new Arc3(450, 700)

    arc24 = new Arc4(325, 150)

    arc25 = new Arc5(325, 700)

}

function draw() {
    arc.display();
    arc2.display();
    arc3.display();
    arc4.display();
    arc5.display();
    arc6.display();
    arc7.display();

    arc8.display();
    arc9.display();
    arc10.display();
    arc11.display();
    arc12.display();
    arc13.display();
    arc14.display();

    arc15.display();


    arc23.display();

    arc24.display();

    arc25.display();


}


class Arc {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.k = 0; // initialize k to 0
    }
  
    display() {
      if (this.k < 180) {
        push();
        stroke(0)
        strokeWeight(10)
        translate(this.x, this.y); // translate to the position passed in the constructor
        rotate(this.k);
        fill(252, 88, 5);
        textSize(300)
        text("-", 0, 0);
        this.k = this.k + 5;
        pop();
      }
    }
  }

  class Arc2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.k = 90; // initialize k to 0
      }
    
      display() {
        if (this.k < 180) {
          push();
          stroke(0)
          strokeWeight(10)
          translate(this.x, this.y); // translate to the position passed in the constructor
          scale(1, 1)
          rotate(this.k);
          fill(252, 88, 5);
          textSize(900);
          text("-", 0, 0);
          this.k = this.k + 2;
          pop();
        }
      }
    }
  
  
    


  class Arc3 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.k = -10; // initialize k to 0
    }
  
    display() {
      if (this.k < 105) {
        push();
        stroke(0)
        strokeWeight(10)
        translate(this.x, this.y); // translate to the position passed in the constructor
        scale(1, 1)
        rotate(this.k);
        fill(252, 88, 5);
        textSize(900);
        text("-", 0, 0);
        this.k = this.k + 2;
        pop();
      }
    }
  }

  
  class Arc4 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.k = 90; // initialize k to 0
      }
    
      display() {
        if (this.k < 180) {
          push();
          stroke(0)
          strokeWeight(10)
          translate(this.x, this.y); // translate to the position passed in the constructor
          scale(1, 1)
          rotate(this.k);
          fill(252, 88, 5);
          textSize(900);
          text("-", 0, 0);
          this.k = this.k + 2;
          pop();
        }
      }
    }
  
    class Arc5 {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.k = -10; // initialize k to 0
        }
      
        display() {
          if (this.k < 105) {
            push();
            stroke(0)
            strokeWeight(10)
            translate(this.x, this.y); // translate to the position passed in the constructor
            scale(1, 1)
            rotate(this.k);
            fill(252, 88, 5);
            textSize(900);
            text("-", 0, 0);
            this.k = this.k + 2;
            pop();
          }
        }
      }