var locs = [];
var images = [];
var vels = [];
var thetas = [];


function setup() {
  createCanvas(500,500,WEBGL);
  stroke(255);             
  noFill();    
  
  for(var i = 0; i < 8; i++){
    images[i] = loadImage("/images/color" + i + ".jpg");
    locs[i] = createVector(random(random(-width/2, width/2),-height/2, height/2),random(-height/2, 0));
    vels[i] = createVector(random(-3,3), random(-3,3), random(-3,3));
    thetas[i] = random(PI);
  }
  
}


function draw() {
  background(255, 251, 160);
  
  
  for(var i = 0; i<8; i++){
  push();
  translate(locs[i].x, locs[i].y, locs[i].z);
  rotateX(thetas[i]);
  rotateY(thetas[i]);
  rotateZ(thetas[i]);
  
  texture(images[i]);         
  box(100,100,100);
  
  pop();
  }
  move();

}

function move(){
    for(var i = 0; i < 8; i++){
       locs[i].add(vels[i]);
       if(abs(locs[i].x) > width/2 )
        vels[i].x *= -1; 
       if(abs(locs[i].y) > height/2)
       vels[i].y *= -1;
       if(locs[i].z < -height/2 ||locs[i].z > 0)
       vels[i].z *= -1;
       thetas[i]+= 0.02;
    }
  
  
  
}