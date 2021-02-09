const NewEngine = Matter.Engine;
const NewWorld= Matter.World;
const NewBodies = Matter.Bodies;

var myengine, myworld;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    myengine = NewEngine.create();
    myworld = myengine.myworld;



    ball = NewBodies.circle(200,100,20);
    NewWorld.add(myworld,ball);

    console.log(ground);
}

function draw(){
    background(0);
   
}