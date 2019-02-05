var ask = require('readline-sync')

var name = ask.question("What is your name? ");

console.log("Welcome to the escape room " + name + ". Good luck getting out!");


var options = ["Put hand in hole", "Find the key", "Open the door",]

var gameOver = false;
var keyFound = false;


//Game Loop
while(!gameOver){
    var userChoice = ask.keyInSelect(options, "What would you like to do? ")
    if(userChoice === 0){
        console.log("You put your hand in the hole, and a bear ate you.")
        gameOver = true
    } else if(userChoice === 1){
        if(keyFound === false){
            console.log("You found the key, now what do you want to do? ")
            keyFound = true
        } else if(keyFound === true){
            console.log("The keymaster is upset by your greed. He rolled a 25 and melted you with HELLFIRE!! ")
            gameOver = true
        }
        
    } else if(userChoice === 2){
        if(keyFound === true){
            console.log("You opened the door and escaped the room!! Good Job!")
            gameOver = true
        } else if(keyFound === false){
            console.log("The door is locked, you must find a key first. ")
        }
    } else if(userChoice === -1){
        console.log("Sorry, it's not that easy to escape! ")
    }
}

