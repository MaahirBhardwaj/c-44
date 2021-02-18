class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  start(){
      if(gameState===0){
          player=new Player();
          player.getCount();
          form=new Form();
          form.display();
      }
      player1=createSprite(600,displayHeight-250);
      player1.addImage(player1image);
      player1.scale=1.0;
      player2=createSprite(1000,displayHeight-250);
      player2.addImage(player2image);
      player2.scale=1.5;
      players=[player1,player2];
      
    }
  play(){
  form.hide();
  if(players!==undefined){
    background("red");
    image(bg,0,0,displayWidth,displayHeight);
    var index=0;
    for(var i in players){
      index=index+1
      if(index===player.index){
        if(keyDown(RIGHT_ARROW)){
          player1.x=player1.x+10; 
         }
         if(keyDown(LEFT_ARROW)){
           player1.x=player1.x-10;
         }
     
      }
    }
    
  }
  drawSprites()
  }
  
}