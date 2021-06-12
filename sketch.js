const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    backgroundImg = loadImage("sunrise1.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
   
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    if (hour>=06 && hour<=19){
    bg='sprites/bg1.png';
    }
    else{
    bg='sprites/bg2.png';
    
    }
    backgroundImg=loadImage(bg);
   
   
   
   
   
   
   
   
   
   
   
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
