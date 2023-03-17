
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;
var mulan;
var mango, mango_two, mango_three, mango_four;
var stem, stem_2, stem_3, stem_4;

function preload(){
  backgroundImg = loadImage("Forest.jpg");
 // mulan = loadImage("mulan.webp");

  mango = loadImage("mango.png");
  mango_two = loadImage("mango.png");
  mango_three = loadImage("mango.png");
  mango_four = loadImage("mango.png");

  stem = loadImage("stem.png");
  stem_3 = loadImage("stem.png");
  stem_4 = loadImage("stem.png");
  stem_2 = loadImage("stem.png");
}

function setup() {
  createCanvas(700,500);

 // mulan = createImg('mulan.png');
 //mulan = createSprite(200,620,100,100);
 // mulan.scale = 0.05;
 // mulan.position(100,20,5,8);


 mango = createImg("mango.png");
 mango.position(50,50);
 mango.size(70,70);
 mango.mouseClicked(drop);
 Matter.Composite.add(stem, mango);

 mango_two = createImg("mango.png");
 mango_two.position(500,-10);
 mango_two.size(70,70);
 Matter.Composite.add(stem_2, mango_two);

 mango_three = createImg("mango.png");
 mango_three.position(400,50);
 mango_three.size(70,70);
 Matter.Composite.add(stem_3, mango_three);

 mango_four = createImg("mango.png");
 mango_four.position(200,-10);
 mango_four.size(70,70);
 Matter.Composite.add(stem_4, mango_four);

 stem = createImg("stem.png");
 stem.position(90,70)
 stem.size(10,10)

 stem_2 = createImg("stem.png");
 stem_2.position(540,10)
 stem_2.size(10,10)

 stem_3 = createImg("stem.png");
 stem_3.position(440,70)
 stem_3.size(10,10)

 stem_4 = createImg("stem.png");
 stem_4.position(240,10)
 stem_4.size(10,10)




  engine = Engine.create();
  world = engine.world;

}

function draw() 
{
  background(51);
  image(backgroundImg, 0, 0, width, height);

/*
image(mango, 50, 50, 70, 70 );
image(mango_two, 500, -20, 70, 70 );
image(mango_three, 400, 50, 70, 70 );
image(mango_four, 200, -20, 70, 70 );
  */

  //image(mulan, 100, 100, 100, 100);


  Engine.update(engine);
  
}

function drop(){
 // mango.dettach();
  mango.null();

}

function dettach(){
  World.remove(engine.world,mango);
}

