let img;
let img2;

let myBool = true;

var crp1;
var crp2;
var crp3;
var crp4;
var crp5;
var crp6;

var i; 



function preload() {
  img = loadImage('Image/K.png');
  img2 = loadImage('Image/K.png')
}

function setup() {
  createCanvas(1000, 1000);
  background(0);
  crp1 = new Crop1(100, 100, 500, 450, 100, 50);
  crp2 = new Crop2(-100, 600, 500, 450, -125, 350);
  crp3 = new Crop3(-300, 1300, 800, 850, -150, 750);
  crp4 = new Crop4(450, 600, 1200, 1200, 375, 383);
  crp5 = new Crop5(500, -400, 1000, 800, 250, -200);
  crp6 = new Crop6(500, -600, 1000, 800, 250, -415);
}

function draw() {
  background(0);
  if (myBool){
  crp1.display();
  crp2.display();
  crp3.display();
  crp4.display();
  crp5.display();
  crp6.display();
  } else {
    image(img2, 0, 0, 1000, 1000)
  }
 
}

class Crop1 {
  constructor(x, y, w, h, x1, y1) {
    this.x = x; 
    this.y = y;
    this.w = w;
    this.h = h;
    this.x1 = x1
    this.y1 = y1
  }
  
  display() {
   
    let croppedImg = img.get(this.x, this.y, this.w, this.h);
    croppedImg.resize(300, 300);
    image(croppedImg, this.x1, this.y1);
  }
}

class Crop2 {
  constructor(x, y, w, h, x1, y1) {
    this.x = x; 
    this.y = y;
    this.w = w;
    this.h = h;
    this.x1 = x1
    this.y1 = y1
  }
  
  display() {
    let croppedImg = img.get(this.x, this.y, this.w, this.h);
    croppedImg.resize(400, 400);
    image(croppedImg, this.x1, this.y1);
  }
}

class Crop3 {
  constructor(x, y, w, h, x1, y1) {
    this.x = x; 
    this.y = y;
    this.w = w;
    this.h = h;
    this.x1 = x1
    this.y1 = y1
  }
  display() {
    let croppedImg = img.get(this.x, this.y, this.w, this.h);
    croppedImg.resize(500, 500);
    image(croppedImg, this.x1, this.y1);
  }
}

class Crop4 {
  constructor(x, y, w, h, x1, y1) {
    this.x = x; 
    this.y = y;
    this.w = w;
    this.h = h;
    this.x1 = x1
    this.y1 = y1
  }
  
  display() {
    let croppedImg = img.get(this.x, this.y, this.w, this.h);
    croppedImg.resize(650, 650);
    image(croppedImg, this.x1, this.y1);
  }
}

class Crop5 {
  constructor(x, y, w, h, x1, y1) {
    this.x = x; 
    this.y = y;
    this.w = w;
    this.h = h;
    this.x1 = x1
    this.y1 = y1
  }
  
  display() {
    let croppedImg = img.get(this.x, this.y, this.w, this.h);
    croppedImg.resize(550, 550);
    image(croppedImg, this.x1, this.y1);
  }
}

class Crop6 {
  constructor(x, y, w, h, x1, y1) {
    this.x = x; 
    this.y = y;
    this.w = w;
    this.h = h;
    this.x1 = x1
    this.y1 = y1
  }
  
  display() {
    let croppedImg = img.get(this.x, this.y, this.w, this.h);
    croppedImg.resize(550, 550);
    image(croppedImg, this.x1, this.y1);
  }
}


function mouseMoved() {
  myBool = !myBool; 

}

function mousePressed() {
  saveCanvas("day-11-k", "png")
} 

