
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var ball;
var smallground;

var pin1,pin1Img,pin2,pin3,pin4,pin5,pin6;
function preload(){
pin1Img=loadImage("pinn.png");
}

	

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
smallground=new Ground(400,470,1800,20);
 
	ball = new Ball(50,195,40);

pin1= new Pin(670,430,50,50);


pin2= new Pin(671,430,50,50);


pin3= new Pin(672,430,50,50);

pin4= new Pin(673,430,50,50);

pin5= new Pin(668,430,50,50);

Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("black");
 
//	Engine.update(engine);
 


  ball.display();
smallground.display();
  pin1.display();
  pin2.display();
   pin3.display();
   pin4.display();
   pin5.display();


 

  keyPressed();
 //drawSprites();
 
  
 
}


function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position,{ x : 5, y : - 5});
  
}}