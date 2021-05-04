const Bodies = Matter.Bodies; 
const World = Matter.World; 
const Engine = Matter.Engine; 

var maxDrops = 100; 
var drops = []; 

var randomNo;
var engine, world; 

var thunderbolt, walkingMan; 
var thunderBoltGroup; 

var thunderbolt1, thunderbolt2, thunderbolt3, thunderbolt4; 
var walkingAnimation; 

function preload() {
  thunderbolt1 = loadImage("images/thunderbolt/1.png"); 
  thunderbolt2 = loadImage("images/thunderbolt/2.png"); 
  thunderbolt3 = loadImage("images/thunderbolt/3.png"); 
  thunderbolt4 = loadImage("images/thunderbolt/4.png"); 

  walkingAnimation = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png"); 
}

function setup() {
  createCanvas(1600, 800);

  engine = Engine.create();
  world = engine.world; 

  walkingMan = createSprite(400, 400, 50, 50); 
  walkingMan.addAnimation("walking", walkingAnimation); 
  walkingMan.scale = 0.5; 

  thunderBoltGroup = new Group(); 

  for (var i = 0; i <= maxDrops; i++) {
    drops.push(new Drops(random(0, 1600), random(0, 800), 10)); 
  }
}

function draw() {
  Engine.update(engine); 

  background("black"); 
  thunder(); 

  for(var d = 0; d <maxDrops; d++) {
    drops[d].display();
    drops[d].spawnRain(); 
  }
  
  drawSprites();
}

function thunder() {
  randomNo = Math.round(random(1, 4));

  if(frameCount % 50 === 0){
    thunderbolt = createSprite(800, 100, 20, 20); 

    thunderbolt.x = Math.round(random(700, 900));
    thunderbolt.scale = 0.5; 

    switch (randomNo) {
      case 1: thunderbolt.addImage(thunderbolt1);
      break;
      
      case 2: thunderbolt.addImage(thunderbolt2); 
      break; 

      case 3: thunderbolt.addImage(thunderbolt3); 
      break; 

      case 4: thunderbolt.addImage(thunderbolt4);  
      break; 

      default: break; 
    }

    thunderBoltGroup.add(thunderbolt); 
  } 

  if (frameCount % 100 === 0) {
    thunderBoltGroup.destroyEach(); 
  }
}
