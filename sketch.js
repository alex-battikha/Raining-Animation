const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var maxDrops = 150;

var playerWalking, thunder, thunderSound;

function preload() {
    playerWalking = loadAnimation("assets/images/walking-guy/guy_walking_1.png", 
    "assets/images/walking-guy/guy_walking_2.png",
    "assets/images/walking-guy/guy_walking_3.png",
    "assets/images/walking-guy/guy_walking_4.png",
    "assets/images/walking-guy/guy_walking_5.png",
    "assets/images/walking-guy/guy_walking_6.png",
    "assets/images/walking-guy/guy_walking_7.png",
    "assets/images/walking-guy/guy_walking_8.png");

    thunder = loadAnimation("assets/images/thunder/thunder-1.png",
    "assets/images/thunder/thunder-2.png",
    "assets/images/thunder/thunder-3.png",
    "assets/images/thunder/thunder-4.png");
    
    thunderSound = loadSound("assets/sound/thunder-sound.mp3");
}

function setup() {
   createCanvas(600, 800);

   engine = Engine.create();
   world = engine.world;


   Engine.run(engine);
}

function draw() {
    Engine.update(engine);

    for(var i = 0; i < maxDrops; i++) {
        Drops.push(new Drops(random(100, 500), random(0, 400)));
    }
    
    drawSprites();
}   
