var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
fixedRect.shapeColor = "green";
movingRect = createSprite(200,400,50,50);
movingRect.shapeColor = "green";

}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.width/2 + fixedRect.width/2) {
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  else {movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";
}
  drawSprites();
}