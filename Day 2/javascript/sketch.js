function setup() { //loads right away 
    var ran = random(255);

    createCanvas(1000, 1000);
    background(random(255), 171, 255);

    var ran = random(255);
    stroke(random(255), 235, 82)
    strokeWeight(25)
    line(240, 240, 235, 800)

    line(375, 550, 725, 200)
    line(350, 500, 700, 850)



   
    fill(random(255), 56, 225);
    rect(200, 200, 75)
    rect(200, 350, 75)
    rect(200, 500, 75)
    rect(200, 650, 75)
    rect(200, 800, 75)


    rect(350, 500, 75)
    rect(500, 650, 75)
    rect(650, 800, 75)


    rect(500, 350, 75)
    rect(650, 200, 75)


 
   
   }


 

function mousePressed() {
    saveCanvas("day-2-k", "png")
}