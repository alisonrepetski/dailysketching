var cWidth = 1000;
var cHeight = 1000;
var i = 0;


function setup() { 
    createCanvas(cWidth, cHeight);
    background(0);
    frameRate(10);

 }
 
 function draw() {
  push();
    noFill();
    stroke(0, 255, 42);
    strokeWeight(5)
    line(250, 200, 250 , 800 + i)
    line(275 , 200, 275 , 800)
    line(300, 200 - i, 300, 800)

    line(515 + i++, 200, 300 + i++, 400)

    line(650, 800+ i, 300, 400+ i)
    i++
    pop()

    if(millis() % 2000 > 0 && millis() % 2000 < 100) {
      restart();
    }

    console.log(millis());
 }


 function restart() {
   i = 0;
   setup();
 }

 function mousePressed() {
  saveCanvas("day-13-k", "png")
}  

