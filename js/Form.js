class Form{
    constructor(){}
    display(){
        //heading Size
        var title = createElement("h1");
        title.html("Car racing game");
        title.position(600,100);
        var input = createInput("Name");
        input.position(500,200);
        var button = createButton("REGISTER HERE");
        button.position(700,450);
        button.size(100,50);

        //when player presses over the register button, the input should be read and registered into the database
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement("h3");
            greeting.html("Enjoy the game "+name);
            greeting.position(600,200);
        })
    }

}