var blackImage
var black
var gameState=0
var logo
var logoImage
var play
var playImage
var player
var playerImage
var jelly
var jellyImage
var score=0

function preload(){
blackImage=loadImage("bg.jpg")
logoImage=loadImage("theme.png")
playImage=loadImage("play.png")
whiteImage=loadImage("white.jpg")
playerImage=loadImage("player.jpg")
jellyImage=loadImage("jelly.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)

black=createSprite(550,200,100,100)
black.addImage("black",blackImage)
black.scale=3

logo=createSprite(width/2,height-450,50,50)
logo.addImage("logo",logoImage)
logo.scale=0.5

play=createSprite(width/2,500,10,10)
play.addImage("play",playImage)
play.scale=0.05

player=createSprite(50,height/2+200,10,10)
player.addImage("player",playerImage)
player.scale=0.1
player.visible=false

jelly=createSprite(100,height/2+120,10,10)
jelly.addImage("jelly",jellyImage)
jelly.scale=0.1
jelly.visible=false


}

function draw(){
 background(200,200)
 
 drawSprites()

if(mousePressedOver(play)){
  gameState=1
} 


if(gameState==1){
  logo.visible=false
  play.visible=false
  push()
  textSize(50)
  fill("white")
  text("WELCOME TO ZOMBIE INVASION",200,200)
  pop()
  textSize(30)
 fill("white")
 text("CONTEXT",200,250)
 pop()
 push()
 textSize(20)
 fill("white")
 text("You are now in the year 2517 where there is a war between humans and zombie. Zombie is slowly starting to takeover the world",200,300)
 text("and now humans are joining together to form a group to stop the zombies siezing the world,",200,320)
 text("")
 pop()
}


 if(keyDown("space")){
  gameState=2
 }

 if(gameState==2){

  push()
  textSize(20)
  fill("white")
  text("WELCOME TO LEVEL 1",50,50)
  text("Use RIGHT ARROW TO SHOOT",50,70)
  text("Use your mouse to move the player",50,90)
  text("Score :",score,150,200)
  pop()

  
  
  player.visible=true
  
  player.y=World.mouseY
  jelly.y=player.y

  if(keyDown("RIGHT_ARROW")){
    jelly.visible=true
    jelly.velocityX=40
  }

  if(jelly.x>1500){
    jelly.x=100
    jelly.velocityX=0
  }

  //player.velocityY=player.velocityY+0.5

 }

 
}



