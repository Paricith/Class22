const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground;
function setup() {
  createCanvas(400,400);
 myEngine= Engine.create()// myEngine.world-it s created by default in memory
 myWorld=myEngine.world;

  //json method
  var option={
    isStatic:true

  }
  ground=Bodies.rectangle(200,390,400,10,option)
  World.add(myWorld,ground)

 // console.log(ground.position.x)
  var ball_option={
   restitution:1

  }
  ball=Bodies.circle(200,200,20,ball_option)
  World.add(myWorld,ball)

}

function draw() {
  background("cyan"); 44
  Engine.update(myEngine);  

  rectMode(CENTER)
  fill("brown")
  rect(ground.position.x,ground.position.y,400,10)
  fill("pink")
  circle(ball.position.x,ball.position.y,50)
}