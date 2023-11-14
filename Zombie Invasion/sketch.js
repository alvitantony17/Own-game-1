const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var bg;
var bgImage;
var play;
var playImage;
var logo;
var logoImage;
var player;
var playerImage;
var zombie;
var zombieImage;
var zombie2;
var zombie2Image;
var zombie3;
var zombie3Image;
var playerleft;
var plImage;

var zombieGroup;

function preload(){
bgImage=loadImage("assets/city2.jpg")
playerImage=loadAnimation("assets/playerright.png","assets/playerright.png","assets/playerright.png","assets/playerright2.png","assets/playerright2.png")
zombieImage=loadAnimation("assets/zombie1.png","assets/zombie2.png","assets/zombie3.png")
zombie2Image=loadAnimation("assets/zb1.png","assets/zb2.png","assets/zb3.png","assets/zb4.png","assets/zb5.png","assets/zb6.png","assets/zb7.png")
zombie3Image=loadAnimation("assets/zom.png","assets/zom1.png","assets/zom2.png","assets/zom3.png","assets/zom4.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);
engine = Engine.create();
world = engine.world;
    
bg=createSprite(1200,-250)
bg.addImage("bg",bgImage)
bg.scale=2

player=createSprite(width/2,height/2+240)
player.addAnimation("player",playerImage)
player.scale=1
player.frameDelay=10


zombie=createSprite(width/2,height/2-210)
zombie.addAnimation("zombie",zombieImage)
zombie.scale=0.4
zombie.frameDelay=10
zombie.velocityY=1
zombie.velocityX=-1

zombie2=createSprite(width/2+300,height/2-210)
zombie2.addAnimation("zombie2",zombie2Image)
zombie2.scale=0.4
zombie2.frameDelay=10
zombie2.velocityY=1
zombie2.velocityX=-1

zombie3=createSprite(width/2+200,height/2-210)
zombie3.addAnimation("zombie3",zombie3Image)
zombie3.scale=0.4
zombie3.frameDelay=10
zombie3.velocityX=-1
zombie3.velocityY=1

zombieGroup=createGroup()
zombieGroup.setVelocityEach(1)
    
}

function draw(){
    background(200,200);
    Engine.update(engine);

    drawSprites()
}

