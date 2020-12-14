const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stick1=new stick(700,550,400,20)
  stick2=new stick(1201,400,300,20)

  polygon1=new polygon(200,500,30)
  
  chain1=new chain(polygon1.body,{x:200,y:500})
  //the last layer of pink tower
b1=new block(550,500)
b2=new block(600,500)
b3=new block(650,500)
b4=new block(700,500)
b5=new block(750,500)
b6=new block(800,500)
b7=new block(850,500)

 //third layer of pink tower
   b8=new block(600,250)
   b9=new block(650,250)
   b10=new block(700,250)
   b11=new block(750,250)
   b12=new block(800,250)

//second layer of pink tower
  b13=new block(650,200)
  b14=new block(700,200)
  b15=new block(750,200)

//the top block
   b16=new block(700,100)

//the last  layer of green tower
   b17=new block(1300,100)
   b18=new block(1250,100)
   b19=new block(1100,100)
   b20=new block(1150,100)
  
//the middle layer
   b22=new block(1149,50)
    b23=new block(1250,50)
    b24=new block(1200,50)

//the top block
    b25=new block(1200,90)
    bf=new block(1200,100)

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

push()
textSize(40)
fill("cyan")
stroke("white")
strokeWeight(3)
text("DRAG THE HEXAGONAL STONE AND RELEASE IT,TO LAUNCH IT TOWARDS THE BLOCKS",50,200)
pop()

 stick1.display()
 stick2.display()

 fill(255, 0, 110)
 b1.display()
 b2.display()
 b3.display()
 b4.display()
 b5.display()
 b6.display()
 b7.display()
 fill(255, 114, 182)
 
 b8.display()
 b9.display()
 b10.display()
 b11.display()
b12.display()
  fill(255, 161, 226)
  b15.display()
  b13.display()
  b14.display()
fill(255, 219, 235)
  b16.display()
  
  fill(48, 219, 51)
b17.display()
b18.display()
b19.display()
b20.display()


  fill(89, 325, 86)
  b22.display()
  b23.display()
  b24.display()
  bf.display()

polygon1.display()
chain1.display()




fill(170, 255, 191)

  b25.display()
  drawSprites();
 
}
function mouseDragged(){

  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){

chain1.fly()

}
function keyPressed(){
if (keyCode==="space"){
  chain1.attach()
}

}

