function setup(){
    createCanvas(displaywidth,displayheight);
    background(50);
    
}
function draw(){
    //background changes when clicked
    if(mouseIsPressed){
        background(255,182,0);
    }
    //shape features
    stroke(255);
    strokeWeight(6);
    nofill();
    
    if(mouseY<150){
        fill(255,0,0)
    }
    else{
        fill(255,182,0);
    }
    
    //the moving shape
    ellipse(300,200,100,100);
}