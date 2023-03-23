function setup() { //loads right away 
    createCanvas(1000, 1000);
    background(187, 255, 0);

   var i = 0;
   while(i < 100 ) {
   var ran = random(255);

   noFill();
   stroke(random(255))
   strokeWeight(50)
   line (250 + i, 150 + i, 250 + i, 800 + i);
   i = i + 40; 
   }

   var b = 0;
   var ran = random(0);
   while(b < 100) {
   stroke(random(255));
   strokeWeight(50);
   line (600 + b, 200 + b, 300+ b, 450+ b );
   b = b + 25;
   }

   var c = 0;
   var ran = random(255);
   while(c < 350) {
   stroke(random(255));
   strokeWeight(50)
   line (400 + c, 550 + c, 300 + c, 450 + c )
   c = c + 25;
}
 
}

function mousePressed() {
    saveCanvas("day-1-k", "png")
}