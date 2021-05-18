var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400, 400);
  
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground= createSprite(400,350,900,10);
  ground.velocityX= -4;
  ground.x= ground.width/2;
  
  score=0;
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
   background(220);
   drawSprites();
  
    fill("black")
    textSize(20);
    text("Survial Time:"+score, 250,30);
  
  score= score+Math.round(getFrameRate()/100);
  if(keyDown("space")){    
    monkey.velocityY=-10;
  }
  
  monkey.velocityY= monkey.velocityY+0.9;
  
  if(ground.x<0){
    ground.x= ground.width/2;   
  }
  
  monkey.collide(ground);
  food();
  obstacles();
}

function food(){
  
  if(frameCount% 80===0){
    banana= createSprite(400,200,10,10); 
    banana.addImage(bananaImage);
    banana.y= Math.round(random(120,200));
    banana.velocityX= -8;
    banana.scale=0.1;
    banana.lifeTime=50;
    FoodGroup.add(banana);
  }
}

function obstacles(){
  
   if(frameCount% 300===0){
    obstacle= createSprite(400,320,10,10); 
    obstacle.addImage(obstacleImage);
    //obstacle.x= Math.round(random(120,200));
    obstacle.velocityX= -8;
    obstacle.scale=0.1;
    obstacle.lifeTime=50;
    obstacleGroup.add(obstacle);
  }
}