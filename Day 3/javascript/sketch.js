function setup() { //loads right away 
    var ran = random(255);

    createCanvas(1000, 1000);
    background(35, 140, 103);

  


    noFill();
    strokeWeight(100)
    stroke(random(255), 245, 212)
    noFill();
    arc(350, 250, 700, 500, -PI/20, PI/2, OPEN);

    arc(350, 750, -700, 500, -PI/2, PI/20, OPEN)
    line(300, 800, 300, 200)

    noFill();
    strokeWeight(13)
    stroke(random(255))
    noFill();
    arc(350, 250, 700, 500, -PI/20, PI/2, OPEN);

    arc(350, 750, -700, 500, -PI/2, PI/20, OPEN)
    line(300, 800, 300, 200)








 
   
   }


 

function mousePressed() {
    saveCanvas("day-3-k", "png")
}