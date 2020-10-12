const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
 
  //creating bodies
  ground = new Ground(240,795,480,10);




  
}

function draw() {
  background("black");
  Engine.update(engine);
  
  ground.display();

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  drawSprites();
}