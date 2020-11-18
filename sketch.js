var man, man_img;
var ground, Line;
var Endline;
var linesssGroup;
var play = 1
var end = 0
var gamestate = 1





function preload() {
  man_img = loadImage("man.png");


}

function setup() {
  createCanvas(1000, 600);
  man = createSprite(300, 300, 50, 50);
  man.addImage(man_img);
  man.scale = 0.1;
  man.velocityX = -3;
  ground = createSprite(width / 2, height - 50, 1600, 150);
  ground.shapeColor = rgb(163, 106, 70);
  ground.velocityX = -4;
  Line = createSprite(width / 2, height - 60, 1600, 10)
  Line.shapeColor = rgb(255, 255, 255);
  Line.velocityX = -4;
  linesssGroup = new Group();
}

function draw() {
  background(30, 196, 214)
  textSize(20);
  text("get him to the finish line", 10, 15);
  text("press O repeatedly to run", 10,35);
 
  if (gamestate === play) {
    drawSprites();
    if (ground.x > 0) {
      ground.x = width / 2;
    }
    if (Line.x > 0) {
      Line.x = width / 2;
    }
    man.velocityY = man.velocityY + 0.8;
    man.collide(Line);
    man.depth = ground.depth + 1
   if (keyWentDown("o")){
     man.velocityX = 7;
   }
   if (keyWentUp("o")){
     man.velocityX = -3;
   }
   endLine(); 
    
   if (man.x < 0 || man.x > 1000){
     gamestate = end;
   }
    if(man.isTouching(linesssGroup)){
     gamestate = end;
   }
    
    
  }
  
  if (gamestate === end){
    
    textSize(20)
    fill("white");
    text("mabye you won mabye you didnt its all about team sport!",100,300);
  }
  
  




}
function endLine(){
  if (frameCount % 1000 === 0){
    Endline = createSprite(1000,height-60,10,130)
    Endline.velocityX =-4;
    Endline.lifeTime = 10;
    linesssGroup.add(Endline);
  }
  
}