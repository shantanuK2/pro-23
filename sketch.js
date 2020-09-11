var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxPart1,boxPart2,boxPart3,boxPart1Sprite,boxPart2Sprite,boxPart3Sprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	boxPart1Sprite = createSprite(400,300,200,20)
	boxPart1Sprite.shapeColor = "red"
	boxPart2Sprite = createSprite(300,300,20,100)
	boxPart2Sprite.shapeColor = "red"
	boxPart3Sprite = createSprite(500,300,20,100)
	boxPart3Sprite.shapeColor = "red"
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	boxPart1 = Bodies.rectangle(400,300,200,20,{isStatic :true})
	World.add(world,boxPart1)

	boxPart2 = Bodies.rectangle(300,300,20,100,{isStatic : true})
	World.add(world,boxPart2)

	boxPart3 = Bodies.rectangle(500,300,20,100,{isStatic : true})
	World.add(world,boxPart3)

    boxPart1Sprite.visible = false
	boxPart2Sprite.visible = false
	boxPart3Sprite.visible = false   
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
 
  background(0)
  boxPart1Sprite.x = boxPart1.position.x
  boxPart1Sprite.y = boxPart1.position.y 
  boxPart2Sprite.x = boxPart2.position.x
  boxPart2Sprite.y = boxPart2.position.y
  boxPart3Sprite.x = boxPart3.position.x
  boxPart3Sprite.y = boxPart3.position.y
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(boxPart1,false)
	Matter.Body.setStatic(boxPart2,false)
	Matter.Body.setStatic(boxPart3,false)
	boxPart1Sprite.visible = true
	boxPart2Sprite.visible = true
	boxPart3Sprite.visible = true
	setInterval(function() {
	Matter.Body.setStatic(packageBody, false)
	},1000)
  }
}
