var shipImg, SeaImg, ship, sea 



function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
SeaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  ship = createSprite(100,250,30,40);
  

  sea.addImage("sea.png",SeaImg);
  ship.addAnimation("shipImg",shipImg);
 
  ship.scale = 0.2;
  sea.scale = 0.5;
}

function draw() {
  background("blue");
    drawSprites();

  sea.velocityX = -1;

 if (sea.x < 1){ 
sea.x = sea.width/2;

 }
}
