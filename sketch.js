var ball,rect1,rect2,rect3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}    


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ball = createSprite(100,500,10,10);
	//Matter.Bodies.circle(400,200,25,[ball]);  

	rect1=createSprite(500,630,10,80);
	rect2=createSprite(565,671,135,10);
	rect3=createSprite(630,630,10,80)
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(100,500, 15, 15);
  drawSprites();
 
}

function keyPressed() {
 	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.Body,ball.body,{x:85,y:-85});
	}


}


