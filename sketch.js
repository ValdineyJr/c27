
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bola1,bola2,bola3, bola4,bola5, piso
var corda1,corda2,corda3, corda4,corda5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	piso = new pisa(400,250,230,20);
	bola1 = new bola(320,575,40)
	bola2 = new bola(360,575,40)
	bola3 = new bola(400,575,40)
	bola4 = new bola(440,575,40)
	bola5 = new bola(480,575,40)
	
	
	corda1=new barbante(bola1.body,piso.body,-80, 0)
	corda2=new barbante(bola2.body,piso.body,-40, 0)
	corda3=new barbante(bola3.body,piso.body,0, 0)
	corda4=new barbante(bola4.body,piso.body,40, 0)
	corda5=new barbante(bola5.body,piso.body,80, 0)
	
	Engine.run(engine);  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
			 Matter.Body.applyForce(bola1.body,bola1.body.position,
								{x:-50,y:-45});
		  }
	}
function draw() {
  rectMode(CENTER);
  background(230);
  piso.display();
  corda1.display();
  corda2.display();
  corda3.display();
  corda4.display();
  corda5.display();
  bola1.display();
  bola2.display();
  bola3.display();
  bola4.display();
  bola5.display();

  
 
}






