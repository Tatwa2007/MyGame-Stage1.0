const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = 0;
var backGround, bedroom, kitchen;
var player;
var blender, pan, mitt, glass, spatula;
var closedBook, laptop, openBook, remote;
var coin;

function preload () {

    bedroomImg = loadImage ("images/bedroom.png");
    kitchenImg = loadImage ("images/kitchen.PNG");
    playerImg = loadImage ("images/boy.png");
    coinImg = loadImage ("images/coin.gif");

    blenderImg = loadImage ("images/blender.gif");
    panImg = loadImage ("images/pan1.gif");
    mittImg = loadImage ("images/mitt.gif");
    glassImg = loadImage ("images/glass.gif");
    spatulaImg = loadImage ("images/spatula.gif");

    closedBookImg = loadImage ("images/closedBook.gif");
    openBookImg = loadImage ("images/openBook.gif");
    laptopImg = loadImage ("images/laptop.gif");
    remoteImg = loadImage ("images/remote.gif");

    
}

function setup(){
   
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height,width,20);
    
   // ball1 = new ball (width/2, height-20, 100, PI/2)

   player = createSprite (width/2,height/2+20,20,20);
   
}



function draw(){
   
    background (bedroomImg)

    player.addImage (playerImg);
    player.scale = width/750;

    Engine.update(engine);
    ground.display(); 
   // ball1.display ();

   if (keyDown(RIGHT_ARROW)) {
       player.x = player.x+10
   }

   if (keyDown(LEFT_ARROW)) {
    player.x = player.x-10
}

if (keyDown(UP_ARROW)) {
    player.y = player.y-10
}

if (keyDown(DOWN_ARROW)) {
    player.y = player.y+10
}
drawSprites ();

}

/*function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}*/

/*
function mouseReleased(){
    slingshot.fly();
    gameState = "launch";  
}

function keyPressed(){
    if(keyCode===32 && bird.body.speed<1){
    bird.trajectory = [];
    Matter.Body.setPosition(bird.body, {x:200, y:50})
    bird.body.speed = 0;
    slingshot.attach(bird.body);
    }
}

async function getTime(){
    console.log(T);
    }

   async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var T = dateTime.slice(11,13);

    

    backgroundImg = loadImage(bg);

   }
   */
   

