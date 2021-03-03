class Player{
    constructor(){}

    //read playercount from database
    getCount(){
        var reference = database.ref('playerCount');
        reference.on("value",function(data) {playerCount = data.val()})
        
    }
    //update playercount from database
    updateCount(count){
        //playerCount refers to the database counts whereas count refers to make a change to the original playerCount
        database.ref("/").update({playerCount:count});
    }
    // read playerinfo 

    // update playerinfo
    update(name){
        var playerIndex = "player"+playerCount;
        //1st name is the database name and the 2nd name would be the new name present for updation which is in line 18
        database.ref(playerIndex).set({name:name});
    }
}