const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
}

function draw() {
  background(0);
  Engine.update(engine);
  
  if (World.frameCount % 20 == 0) {
     drop1 = new drop(10,0)
  }
  
  
  drop1.display(); 
      
  drawSprites();
}

  
  
  
