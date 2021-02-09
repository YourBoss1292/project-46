var pc, pcImage;
var Back;
var obstaclesGroup, meteorImg;
var npc, npcImage;


function preload(){
    backgroundImage = loadImage("Game.jpg")
    pcImage = loadImage("spaceShip.png")
    meteorImg = loadImage("meteor.png")
    npcImage = loadImage("npc.png")
}

function setup(){
    createCanvas(displayWidth, displayHeight);
    Back = createSprite(displayWidth/2,displayHeight/2)
    Back.addImage(backgroundImage)
    Back.velocityY = 5
  
    Back.scale = 1.5;
    pc = createSprite(690, 290, 50, 50)
    pc.addImage(pcImage)
    npc = createSprite(690, 490, 50, 50)
    npc.addImage(npcImage)
    pc.scale = 0.3
    npc.scale = 0.7
    obstaclesGroup = new Group();
    npc.velocityX = 5
}

function draw(){
    background("white")
    pc.velocityX = 0;
    pc.velocityY = 0;
   
    if(npc.x > displayWidth-200){
        npc.velocityX = -5
    }

    if(npc.x < 190){
        npc.velocityX = 5
    }
    

    if(Back.y > displayHeight){
        Back.y = Back.y/2
    }

    spawnObstacles()

  if(keyDown("LEFT_ARROW")){
        pc.velocityX = -5 
        }

  if(keyDown("RIGHT_ARROW")){
pc.velocityX = 5 
      }

     /* if(obstaclesGroup.isTouching(pc)){
          pc.destroyEach();
      }*/

      
      drawSprites();
}


function spawnObstacles() {
  if(frameCount % 100 === 0) {
    var obstacle = createSprite(600,0,10,40);
    var obstacle2 = createSprite(100,165,10,40);
    var obstacle3 = createSprite(displayWidth-50,165,10,40);
    obstacle.addImage(meteorImg)
    obstacle2.addImage(meteorImg)
    obstacle3.addImage(meteorImg)
    obstacle.x = Math.round(random(500,1000));
    obstacle2.y = Math.round(random(100,300));
    obstacle3.y = Math.round(random(100,300));
    //obstacle.debug = true;
    //obstacle.velocityX = -(6 + 3*score/100);
    obstacle.velocityY = 10
    obstacle2.velocityX = 5
    obstacle3.velocityX = -5
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle2.scale = 0.2;
    obstacle3.scale = 0.2;
    obstacle.lifetime = 250;
    obstacle2.lifetime = 250;
    obstacle3.lifetime = 250;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle, obstacle2, obstacle3);
  }
}

function reset(){
    //gameState = PLAY;
    //gameOver.visible = false;
    //restart.visible = false;
    
    obstaclesGroup.destroyEach();
    
    
    
    
    //if(localStorage["HighestScore"]<score){
      //localStorage["HighestScore"] = score;
    //}
    //console.log(localStorage["HighestScore"]);
    
    //score = 0;
    
  }


