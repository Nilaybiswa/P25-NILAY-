
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;
var world;


function setup() {
	createCanvas(1280, 580);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,575,width,20);
	dustbinObj=new dustbin(1130,560);
    paperObject = new paper(40,40,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  

  
}
function keyPressed(){
   if(keyCode===UP_ARROW){
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:110,y:-85});
   }

}

