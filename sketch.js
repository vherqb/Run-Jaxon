
function preload() {
  //pre-load images
  running_jaxon = loadAnimation("Runner-1.png", "Runner-2.png")
  racing_path = loadImage("path.png")
}

function setup() {
  createCanvas(400, 400);

  path = createSprite(200, 400)
  path.addImage(racing_path)
  path.velocityY = 4
  path.scale = 1.32

  jaxon = createSprite(200, 300)
  jaxon.addAnimation("run",running_jaxon)
  jaxon.scale = 0.08

  left = createSprite(0,0,50,800)
  left.visible = false

  right = createSprite(400,0,40,800)
  right.visible = false
}



function draw() {
  background("black");
  jaxon.x = mouseX
if (path.y > 600){
  path.y = 400;
}
jaxon.collide(left)
jaxon.collide(right)

drawSprites(); 
}