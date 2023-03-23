var btn;
var btn2;
var btn3;
var btn11;
var btn4;
var btn12;
var btn5;
var btn13;
var btn6;
var btn7;
var btn8;
var btn9;
var btn10;
var btn14;
var btn15;
var btn16;
var btn17;
var btn18;
var apr;


function setup() { 
    createCanvas(1000, 1000);
    background(220, 245, 241);  


      //appear
      apr = new Appear(280, 470)

    //long stem
    btn = new Button(200, 200)
    btn3 = new Button(200, 350)
    btn4 = new Button(200, 500)
    btn5 = new Button(200, 650)
    btn6 = new Button(200, 800)
    
   

    //long stem
    btn2 = new Button2(200, 275)
    btn11 = new Button2(200, 425)
    btn12 = new Button2(200, 575)
    btn13 = new Button2(200, 725)


    //diagonal 1
    btn7 = new Button(350, 415)
    btn8 = new Button(500, 325)
    btn9 = new Button2(280, 465)
    btn10 = new Button2(425, 375)

    //diagonal 2
    btn14 = new Button(325, 550)
    btn15 = new Button(600, 800)
    btn16 = new Button2(375, 625)
    btn17 = new Button2(520, 765)
    btn18 = new Button(450, 700)


  
}
  

function draw() {
//long stem
apr.display()

btn.display();
btn2.display()
btn3.display()
btn11.display()
btn4.display()
btn12.display()
btn5.display()
btn13.display()
btn6.display()
btn7.display()
btn8.display()
btn9.display()
btn10.display()
btn14.display()
btn15.display()
btn16.display()
btn17.display()
btn18.display()

} 

function mouseMoved() {
        apr.scale();
}
      
  
    
class Appear {
    constructor(x, y) {
      this.btnX = x;
      this.btnY = y;
      this.btnH = 25;
      this.btnW = 25;
    }
    display() {
      fill(224, 86, 47)
      noStroke()
      ellipse(this.btnX, this.btnY, this.btnH, this.btnW)
    
    }
  
    scale() {
        this.btnW = this.btnW + 10;
        this.btnH = this.btnH + 10;
      }
  }
  


class Button {
    constructor(x, y) {
      this.btnX = x;
      this.btnY = y;
      this.btnH = 100;
      this.btnW = 100;
    }
    display() {
      fill(224, 86, 47)
      noStroke()
      ellipse(this.btnX, this.btnY, this.btnH, this.btnW)
  
      fill(220, 245, 241)
      ellipse(this.btnX - 15, this.btnY - 15, 20, 20)
      ellipse(this.btnX + 15, this.btnY + 15, 20, 20)
      ellipse(this.btnX + 15, this.btnY - 15, 20, 20)
      ellipse(this.btnX - 15, this.btnY + 15, 20, 20)
    }
  
  }
  
  class Button2 {
    constructor(x, y) {
      this.btnX = x;
      this.btnY = y;
      this.btnH = 50;
      this.btnW = 50;
    }
    display() {
      fill(77, 53, 232)
      noStroke()
      ellipse(this.btnX, this.btnY, this.btnH, this.btnW)
  
      fill(220, 245, 241)
      ellipse(this.btnX - 15, this.btnY - 15, 20, 20)
      ellipse(this.btnX + 15, this.btnY + 15, 20, 20)
      ellipse(this.btnX + 15, this.btnY - 15, 20, 20)
      ellipse(this.btnX - 15, this.btnY + 15, 20, 20)
    }
  }

  function mousePressed() {
    saveCanvas("day-6-k", "png")
}
