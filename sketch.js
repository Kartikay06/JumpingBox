var canvas;
var music;
var box,block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box= createSprite(random(20,750),100,20,20);
    box.shapeColor="white";
    box.velocityX=4;
    box.velocityY=9;

    block1=createSprite(0,580,360,30);
    block1.shapeColor="blue";

    block2=createSprite(295,580,200,30);
    block2.shapeColor="orange";

    block3=createSprite(515,580,200,30);
    block3.shapeColor="pink";

    block4=createSprite(740,580,220,30);
    block4.shapeColor="green";


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges);

    //create edgeSprite
    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor="blue";
        box.velocityX=0;
        box.velocityY=0;
        music.play();
    }

    if(block2.isTouching(box) && box.bounceOff(block2)){
        box.shapeColor="orange";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }

    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor="pink";
        box.velocityX=0;
        box.velocityY=0;
        music.play();
    }

    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor="green";
        box.velocityX=0
        box.velocityY=0;
        music.stop();
    }
    



    //add condition to check if box touching surface and make it box
    drawSprites();
    }
