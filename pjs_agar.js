var locations = [];
var sizes = [];
var count;
var directions = [];
var colors = [];

function setup() {
  createCanvas(500,500);
  count = 40;
  for(var i = 0; i < count; i++){
    sizes[i] = random(50, 100); 
    locations[i] = createVector(random(width/5, 4*width/5), random(height/5, 4*height/5)); 
    directions[i] = createVector(random(-1,1), random(-1,1)); 
    colors[i] = color(random(255),random(255),random(255));
  }
}

function draw() {
  background(255);
  noStroke();
  for(var i = 0; i < count; i++){
    fill(colors[i]);
    ellipse(locations[i].x, locations[i].y, sqrt(sizes[i]/PI), sqrt(sizes[i]/PI));
    }
    
  move();
  checkCollision();
}

function move() {
  for(var i = 0; i < count; i++){
    locations[i].x += (directions[i].x) *(25.0/sqrt(sizes[i]/PI));
    if(locations[i].x + (sqrt(sizes[i]/PI)) > width || locations[i].x - (sqrt(sizes[i]/PI)) < 0)
    directions[i].x *= -1;
    locations[i].y += (directions[i].y)*(25.0/sqrt(sizes[i]/PI));
    if(locations[i].y + (sqrt(sizes[i]/PI)) > height || locations[i].y - (sqrt(sizes[i]/PI)) < 0)
    directions[i].y *= -1;
  }
  
  
}

function checkCollision(){
 for(var i = 0; i < count; i++){
    for(var j = 0; j < count; j++){
      if(i != j){
        var dist = locations[i].dist(locations[j]);
        if(dist < (sqrt(sizes[i]/PI) + sqrt(sizes[j]/PI))/2){
           if(sizes[i] > sizes[j]){
           sizes[i] += sizes[j];
           sizes[j] = random(50, 100); 
           locations[j] = createVector(random(width/5, 4*width/5), random(height/5, 4*height/5)); 
           directions[j] = createVector(random(-1,1), random(-1,1)); 
           colors[j] = color(random(255), random(255), random(255));
      }
        if(sizes[i] < sizes[j]){
           sizes[j] += sizes[i];
           sizes[i] = random(50, 100); 
           locations[i] = createVector(random(width/5, 4*width/5), random(height/5, 4*height/5)); 
           directions[i] = createVector(random(-1,1), random(-1,1)); 
           colors[i] = color(random(255), random(255), random(255));
      }
        }
      
      }
      }
    
 }
  
  
  
  
}