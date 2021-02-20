
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,690,800,20);
	hammer =new Hammer(200,300,100,50);
	stone = new Stone(400,300);
	rubber = new Rubber(250,150,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  
}



