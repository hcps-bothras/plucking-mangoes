
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var constraint;
var hand;

function preload(){
	boy = loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
	treeObj = new tree(1050,580);
	groundObject = new ground(width/2,600,width,20);
	stoneObj = new blueprint(200,350,30,30);
	constraint = new constraintStone(stoneObj.body,{x: 240, y: 420});
	
	Engine.run(engine);
}

function draw() {
	

  background(230);
  //Add code for displaying text here!
  image(boy,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  constraint.display(); 
  mango1.display();
  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){

}