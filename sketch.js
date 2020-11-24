
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var Paper, PaperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 380, width, 10 , {isStatic:true} );
	World.add(world, ground); 

	bottomSide = new Dustbin(700,360,200,20);
	leftSide = new Dustbin(600,320,20,100);
	rightSide = new Dustbin(790,320,20,100);
	Paper = new paper(100,370,30) ;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  push();
  fill("yellow");
  rect(width/2, 380, width, 10);
  pop();

  bottomSide.display();
  leftSide.display();
  rightSide.display();
  Paper.display();

  drawSprites();
 
}

function keyPressed()
{
 if(keyCode === UP_ARROW)
 {
  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:35,y:-35});

 }

}

