var tom , tomsittingimg , tomrunningimg,tomsittingimg3;
var jerry , jerrycarryingimg,jerrylast,jerrycarrying;
var background , backgroundimg;
var jerry2,jerry2img;

function preload() {
    //load the images here
    jerrystarting=loadAnimation("JerryOne.png")
   jerrycarrying = loadAnimation ("jerryThree.png","jerryTwo.png");
   jerrylast = loadAnimation("jerryFour.png")
   
    backgroundimg = loadImage (" garden.png");

    tomsittingimg = loadAnimation ("tomOne.png");
    tomrunningimg=loadAnimation("tomTwo.png","tomThree.png");
    tomsittingimg3 = loadAnimation ("tomOne.png")
    tomlast=loadAnimation("tomFour.png")
}

function setup(){

    createCanvas(1000,800);
   
     background=createSprite(500,480,1000,800)
     background.addImage(backgroundimg);
    background.scale=1

    jerry = createSprite(230,680,50,40);
    jerry.addAnimation("jerry1",jerrystarting);
    jerry.scale=0.1;
  
    

    tom = createSprite(750,650,50,50);
    tom.addAnimation("catwait",tomsittingimg);
    tom.scale=0.2;
    tom.velocityX=0
    tom.depth=jerry.depth;
   
     
    //create tom and jerry sprites here

}

function draw() {
   
   if(tom.x - jerry.x <tom.width/2 + jerry.width/2
    && tom.x===350 ){
 
       tom.velocityX=0;
      tom.addAnimation("catsit",tomlast);
       tom.changeAnimation("catsit");
       
      jerry.addAnimation("jerryTeasing", jerrylast); 
       jerry.changeAnimation("jerryTeasing");
   }
 

    console.log(tom.x);
    //Write condition here to evalute if tom and jerry collide
    

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){

        tom.velocityX=-4;   
        tom.addAnimation("cat_running",tomrunningimg);
        tom.changeAnimation("cat_running");

        jerry.addAnimation("jerryteasing",jerrycarrying);
        jerry.changeAnimation("jerryteasing")
    }

    //For moving and changing animation write code here
  
  
  }
  