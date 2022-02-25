
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var lline
var sline
var gr1, lg,rg

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	var ball_options={
	isStatic:false,
restitution: 0.3,
friction : 0,
density : 1.2
}
ball=Bodies.circle(100,20,20,ball_options)
World.add(world, ball)
	gr1 = new Ground(300,670,2400,20)
	lg = new Ground(1100,600,20,120)
	rg = new Ground(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ellipse(ball.position.x, ball.position.y, 20,20)
 gr1.display()
 lg.display()
rg.display()
}


function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce( ball, ball.position,{x:90,y:-90})
	}
}
