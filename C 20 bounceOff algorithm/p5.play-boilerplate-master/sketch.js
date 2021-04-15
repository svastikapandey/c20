var movingRect , fixedRect;
function setup() {
  createCanvas(800,1200);
  fixedRect= createSprite(400, 200, 50, 100);
  fixedRect.shapeColor="blue";
  fixedRect.velocityY=5

  movingRect= createSprite(400, 700, 100, 50);
  movingRect.shapeColor="blue";
  movingRect.velocityY=-5;
}

function draw() {
  background("black"); 
//horizontal
  if(movingRect.width/2+ fixedRect.width/2>movingRect.x-fixedRect.x &&
    movingRect.width/2+ fixedRect.width/2>fixedRect.x-movingRect.x ){
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
    }
//vertical
    if(movingRect.height/2+ fixedRect.height/2>movingRect.y-fixedRect.y &&
    movingRect.height/2+ fixedRect.height/2>fixedRect.y-movingRect.y){
      movingRect.velocityY=movingRect.velocityY*(-1);
      fixedRect.velocityY=fixedRect.velocityY*(-1);
  }

  drawSprites();
}