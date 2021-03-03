class Game{
    constructor(){}
    //read gamestate from database
    getState(){
        var reference = database.ref('gameState');
        reference.on("value",function (data) {
            //val helps to read the value of the data in the database
            gameState = data.val();
            
        })
        

    }
    //update gamestate to the database
    update(state){
        // '/'refers to the entire values of the database and we are going to update the normal gameState from database to the changed gameState
        database.ref("/").update({gameState:state});
    }
    //start function to start the game 
     //if the gameState is 0, game is in a wait state, we will create playerObject,FormObject
     start(){
         if(gameState === 0){
             player = new Player();
             player.getCount();
             form = new Form();
             form.display();
         }
     }
    
}