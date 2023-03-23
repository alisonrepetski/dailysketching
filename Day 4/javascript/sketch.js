function setup() { //loads right away 
    var ran = random(100, 255)
    createCanvas(1000, 1000);
    background(235, 209, 232);


    noFill();
    strokeWeight(75)
    
    stroke(255,0,0,(random(100, 255)))
    arc(250, 250, 700, 500, -PI/20, PI/2, OPEN);

    stroke(255,0,0,(random(100, 255)))
    line(350, 700, 350, 200)


    stroke(255,0,0,(random(100, 255)))
    arc(250, 650, -700, 500, -PI/2, PI/20, OPEN)






   
   }


 

function mousePressed() {
    saveCanvas("day-4-k", "png")
}