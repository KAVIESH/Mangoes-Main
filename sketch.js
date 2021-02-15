
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone,ground;
var boy,boyImg;
var tree,treeImg,launcher;
//var lmango,lstone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
function preload(){
boyImg=loadImage("images/boy.png");
treeImg=loadImage("images/tree.png");
}
function setup() {
	createCanvas(1700,1400);
	engine = Engine.create();
	world = engine.world;
   boy=createSprite(250,1250,10,20);
 boy.addImage(boyImg);
 boy.scale=0.2;
 tree=createSprite(1235,875,30,150);
 tree.addImage(treeImg);
 tree.scale=0.8;
	//Create the Bodies Here.
    stone=new Stone(170,1100,40)
   ground=new Ground(750,1380,2000,40)
   mango1=new Mango(900,721,50);
   mango2=new Mango(1020,700,50);
   mango3=new Mango(1200,500,50);
   mango4=new Mango(1500,700,50);
   mango5=new Mango(1580,810,50);
   mango6=new Mango(1450,600,50);
   mango7=new Mango(1300,400,50);
   mango8=new Mango(1150,600,50);
   mango9=new Mango(1100,800,50);
   mango10=new Mango(1300,600,50);
   mango11=new Mango(1300,720,50);
   mango12=new Mango(1400,750,50);
  launcher = new Launcher(stone.body,{x:169, y:1100});
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  
 // detectcollision();
 // keyPressed();
  //keyCode();
  //mouseDragged();
 // mouseReleased();
 detectcollision(stone,mango1);  
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);
 detectcollision(stone,mango6);
 detectcollision(stone,mango7);
 detectcollision(stone,mango8);
 detectcollision(stone,mango9);
 detectcollision(stone,mango10);  
 detectcollision(stone,mango11);
 detectcollision(stone,mango12);                     
  drawSprites();
  
   
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
 mango11.display();
 mango12.display();
 launcher.display();
 fill("white");
 textSize(52);
 text("Press 'SPACE' to get the second chance!!!",100,70);

}
function detectcollision(lstone,lmango){
 // var mangoBodyPosition=lmango.body.position;
// var stoneBodyPosition=lstone.body.position;
  
  var distance=dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
 // console.log("released");
  launcher.fly();
}
function keyPressed(){
if(touches.length>0 || keyCode === 32){
Matter.Body.setPosition(stone.body,{x:170,y:1})
launcher.attach(stone.body);
}
}