const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var maxDrops = 150;

var thunderSound;

function preload() {
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
    
    drawSprites();
}   

