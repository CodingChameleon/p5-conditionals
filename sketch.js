function setup(){
    createCanvas(600,400);
}
function draw(){
    background(50);
    //background changes when clicked
    if(mouseIsPressed){
        background(255,182,0);
    }
    //shape features
    stroke(255);
    strokeWeight(6);
    noFill();
    
    if(mouseY<150){
        fill(249, 150, 29);
    }
    else{
        fill(15, 154, 224);
    }
    
    //the moving shape
    ellipse(300,200,100,100);
}