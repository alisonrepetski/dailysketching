var flr; 
var flr2; 
var flr3; 
var flr4; 
var flr5; 
var flr6; 
var flr7; 
var flr8; 
var flr18;
var flr19;
var flr20;
var flr21;
var flr22;
var flr23;
var flr24;
var flr25;

var flr17;

var a = 0;


function setup() { 
    createCanvas(1000, 1000);
    background(189, 201, 252); 
   

    flr = new Flower (200, 200)
    flr3 = new Flower(200, 500)
    flr4 = new Flower(200, 800)
    flr5 = new Flower(400, 400)
    flr6 = new Flower(600, 250)
    flr7 = new Flower(500, 600)
    flr8 = new Flower(600, 800)

    flr2 = new Flower2(220, 300)
    flr9 = new Flower2(500, 350)
    flr10 = new Flower2(600, 700)
    flr11 = new Flower2(175, 700)
    flr12 = new Flower2(500, 300)
    flr13 = new Flower2(400, 550)
    flr14 = new Flower2(450, 550)
    flr15 = new Flower2(400, 500)
    flr16 = new Flower2(575, 650)

    flr17 = new Flower2(220, 650)
    flr18 = new Flower2(175, 600)
    flr19 = new Flower2(200, 350)
    flr20 = new Flower2(225, 400)
    flr21 = new Flower2(250, 450)
    flr22 = new Flower2(315, 485)
    flr23 = new Flower2(315, 405)
    flr24 = new Flower2(600, 750)
    flr25 = new Flower2(550, 715)
}

function draw() {

    
    flr10.display();
    flr11.display();
    flr12.display();
    flr13.display();
    flr14.display();
    flr15.display();
    flr16.display();
    flr17.display();
    flr18.display();
    flr19.display();
    flr20.display();
    flr21.display();
    flr22.display();
    flr23.display();
    flr25.display();
    flr.display();
    flr2.display();
    flr3.display();
    flr4.display();
    flr5.display();
    flr7.display();
    flr8.display();
    flr9.display();
    

    rectMode(CENTER);
    translate(width/2, height/2);
    rotate(a);
    flr
    line(0, 0, 0, height/8);
    a = a + 0.01

} 




class Flower {
    constructor(x, y) {
        this.petalX = x;
        this.petalY = y;
        this.petalH = 60; 
        this.petalW = 60; 
    }
display() {
    noStroke();

   
   
    fill(201, 4, 67)
    ellipse(this.petalX+50, this.petalY, 75, 75)
    ellipse(this.petalX-50, this.petalY, 75, 75)
    ellipse(this.petalX, this.petalY-50, 75, 75)
    ellipse(this.petalX, this.petalY-50, 75, 75)

    
    ellipse(this.petalX, this.petalY + 50, 75, 75)

    fill(224, 135, 163)
    ellipse(this.petalX, this.petalY + 35, 50, 50)
    ellipse(this.petalX, this.petalY-35, 50, 50)
    ellipse(this.petalX-35, this.petalY, 50, 50)
    ellipse(this.petalX+35, this.petalY, 50, 50)



    fill(255, 204, 0)
    ellipse(this.petalX, this.petalY, this.petalH, this.petalW)  
}


    }

    class Flower2 {
        constructor(x, y) {
            this.petalX = x;
            this.petalY = y;
            this.petalH = 30; 
            this.petalW = 30; 
        }
    display() {
        noStroke();
    
        fill(153, 113, 144)
        ellipse(this.petalX+25, this.petalY, 37.5, 37.5)
        ellipse(this.petalX-25, this.petalY, 37.5, 37.5)
        ellipse(this.petalX, this.petalY-25, 37.5, 37.5)
        ellipse(this.petalX, this.petalY-25, 37.5, 37.5)
    
        
        ellipse(this.petalX, this.petalY + 25, 37.5, 37.5)
    
        fill(250, 157, 230)
        ellipse(this.petalX, this.petalY + 17.5, 25, 25)
        ellipse(this.petalX, this.petalY-17.5, 25, 25)
        ellipse(this.petalX-17.5, this.petalY, 25, 25)
        ellipse(this.petalX+17.5, this.petalY, 25, 25)
    
    
    
        fill(255, 204, 0)
        ellipse(this.petalX, this.petalY, this.petalH, this.petalW)  
    }
  
    
        }
    
        function mousePressed() {
            saveCanvas("day-5-k", "png")
        }
