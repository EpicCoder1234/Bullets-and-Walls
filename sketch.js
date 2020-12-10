var bullet,wall;
var weight,speed;

var thickness 


function setup() { 
  createCanvas(800,400); 
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,103)

  bullet = createSprite(200,200,50,10);
  bullet.velocityX = speed;
  wall = createSprite(700,200,thickness,height/2);
  
  
  bullet.shapeColor='white'; 
  wall.shapeColor='white';
  
} 
function draw() { 

  bullet.depth = wall.depth+1;
  background('black'); 
  
  if(collide(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage<10){
      wall.shapeColor = "green";
    }
    if(damage>10){
      wall.shapeColor = "red";
    }
  }


  drawSprites(); 
}