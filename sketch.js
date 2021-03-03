var database;
//no.of players
var playerCount = 0;
var gameState = 0;
var form,player,game;


function setup(){
 database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}