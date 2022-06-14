var wood, woodImg
var knivesImg, knives
var appleImg, apple
var applesGroup
function preload() {
  woodImg = loadImage("images/wood.png")
  knivesImg = loadImage("images/knives.png")
  appleImg = loadImage("images/apple.png")
}
function setup() {

  createCanvas(800, 800);
  wood = createSprite(400, 200, 800, 400)
  wood.addImage(woodImg)
  wood.scale = 2
  knives = createSprite(145, 324, 100, 150)
  knives.addImage(knivesImg)
  knives.scale = 0.25
  // apple = createSprite(250, 325, 140, 120)
  // apple.addImage(appleImg)
  // apple.scale = 0.30
  applesGroup = new Group()



}

function draw() {
  background(235, 253, 223);
  knives.x = mouseX
  knives.y = mouseY
  spawnApple()
  //image(wood,width/2,height,800,400)
  drawSprites();
}
function spawnApple() {
  //write code here to spawn the apples
  if (frameCount % 60 === 0) {
    apple = createSprite(400, 0, 40, 10);
    apple.x = Math.round(random(10, 790));
    apple.addImage(appleImg);
    apple.scale = 0.5;
    apple.velocityY = 10;

    //assign lifetime to the variable
    apple.lifetime = 200;

    //adjust the depth
    apple.depth = knives.depth;
    knives.depth = knives.depth + 1;

    //add each apple to the group
    applesGroup.add(apple);
  }
}
