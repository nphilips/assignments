var ask = require('readline-sync')
var sleep = require('sleep')

/////////////////////////////////////
// GLOBAL VARIABLES/////////////////
///////////////////////////////////
var gameOver = false
var hasGrenade = false
// var run = false


var lovedOne ={
    name: '',
    isBehindYou: true
}

var player = {
    name: '',
    health: 100,
    inventory:[
        {
            potion: 1
        },
        {
            weapon: 0
        }],
    baseAttack: 1
}

var monster = [
    {
        name: "Minotaur",
        health: 25,
        // inventory: [{weapon: 1}],
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
        // inventory: [{weapon: 1}],
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
        // inventory: [{weapon: 1}],
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
        // inventory: [{weapon: 1}],
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
        // inventory: [{weapon: 1}],
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
        // inventory: [{weapon: 1}],
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
    //  inventory: [{weapon: 1}],
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
    //  inventory: [{weapon: 1}],
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
    //  inventory: [{weapon: 1}],
        baseAttack: 0
    },
    {
        name: "Cerberus",
        health: 30,
        // inventory: [{weapon: 1}],
        baseAttack: 2
    },
    {
        name: "Cerberus",
        health: 30,
        // inventory: [{weapon: 1}],
        baseAttack: 2
    },
    {
        name: "Cerberus",
        health: 30,
        // inventory: [{weapon: 1}],
        baseAttack: 2
    },
    {
        name: "Cerberus",
        health: 30,
        // inventory: [{weapon: 1}],
        baseAttack: 2
    },
    {
        name: "Cerberus",
        health: 30,
        // inventory: [{weapon: 1}],
        baseAttack: 2
    },
    {
        name: "Hydra",
        health: 30,
        // inventory: [{potion: 1}],
        baseAttack: 6
    },
    {
        name: "Hydra",
        health: 30,
        // inventory: [{potion: 1}],
        baseAttack: 6
    },
    {
        name: "Hydra",
        health: 30,
        // inventory: [{potion: 1}],
        baseAttack: 6
    },
    {
        name: "Hydra",
        health: 30,
        // inventory: [{potion: 1}],
        baseAttack: 6
    },
    {
        name: "Hydra",
        health: 30,
        // inventory: [{potion: 1}],
        baseAttack: 6
    },
    {
        name: "Rabbit of Caerbannog",
        health: 100,
        inventory: "Holy Hand Grenade",
        baseAttack: 10
    }
]
var items = ["potion", "weapon", "potion"]
var event = [
    {
        name: "Underworld Mushroom",
        action: 'player.health += 10',
        description: "You stop for some mushrooms you found along the path: Health + 10"
    },
    {
        name: "Hobbit Grass",
        action: 'player.health += 10',
        description: "You stubble upon a man named 'Gandalf' who then proceeds to smoke hobbit grass with you: Health + 10"
    },
    {
        name: "Drinking Styx",
        action: 'player.health -= 5',
        description: "You were thirsty and stopped to drink from a river, too bad it was the river Styx: Health - 5"
    },
    {
        name: "Dead Adventurer",
        action: 'player.health += 10',
        description:"You found a fallen adventurer with a potion on him. He won't be needing it : Health + 10"
    },
    {
        name:"Burned",
        action: 'player.health -= 5',
        description:"You were struck by a random ember that caused you to burst into flames : Health - 5"
    },
    {
        name: "Mom?",
        action: 'player.health += 10',
        description: "You see your mother on the side of the path. She gives you words of encouragement : Health + 10"
    }
]
///////////////////////////////////
//GAME FUNCTIONS//////////////////
/////////////////////////////////

///////////
///WALK///
/////////
function walk(){
    var chance = Math.ceil(Math.random() * 4)   // random number between 1-4  .floor does 0-3, .ceil does 1-4
        if(chance === 3){
            //attack stuff//
            if(hasGrenade === false){
                console.log("\n     [SHADE] We are being attacked! ")
                sleep.msleep(1000)
                monsterSummon()
                // monsterBattle()
            } else if(hasGrenade === true){
                bossFight()
            }
        }else if(chance === 4){
            randomEvent()
        }else{
            console.log("\n     [SHADE] Good progress, make another choice. ")
        }
}

/////////////////////
///MONSTER SUMMON///
///////////////////
function monsterSummon(summonedMonster){
    var summonChance = Math.floor(Math.random() * monster.length)
    var summonedMonster = monster[summonChance]
    if(summonChance === 0||summonChance === 1||summonChance === 2||summonChance === 3||summonChance === 4||summonChance === 5||summonChance === 6||summonChance === 7||summonChance === 8){
        summonedMonster.health = 25
    }else if(summonChance === 9||summonChance === 10||summonChance === 11||summonChance === 12||summonChance === 13){
        summonedMonster.health = 30
    }else if(summonChance === 14||summonChance === 15||summonChance === 16||summonChance === 17||summonChance === 18){
        summonedMonster.health = 30
    }else if(summonChance === 19){
        summonedMonster.health = 50
    }
    var battleMonster = summonedMonster
    console.log("\n     A " + summonedMonster.name + " is attacking")
    console.log( summonedMonster.health)
    monsterBattle(battleMonster, summonedMonster)

}

/////////////
///BATTLE///
///////////
function monsterBattle(battleMonster, summonedMonster){
    battleMonster.health += player.inventory[1].weapon*10
    console.log(battleMonster.health)
    while(battleMonster.health > 0 && player.health > 0 && run === false){
        var attackOptions = ["Run!", "Fight!", "Drink Potion", "Turn around"]
        var battleChoice = ask.keyInSelect(attackOptions, "     [SHADE] What should we do? ")
        if(battleChoice === 0){
            if(ask.keyInYN("\n     [SHADE] Are you sure You want to run?")){
                runAway()
            }
        }else if(battleChoice === 1){
            attack(battleMonster, summonedMonster)
        }else if(battleChoice === 2){
            drinkPotion()
        }else if(battleChoice === 3){
            turnAround()
        }else if(choice === -1){
            if(ask.keyInYN("\n     [SHADE] Abandon " + lovedOne.name + " forever?")){
                turnAround()
            }
        }
    }
}

/////////////////
///BOSS FIGHT///
///////////////
function bossFight(){
    console.log("\n     [SHADE] I'm sorry " + player.name + ", but I have my orders.")
    sleep.msleep(1000)
    console.log("\n     The shade growls and doubles in size.")
    sleep.msleep(1000)
    console.log("\n     A reaper's sythe appears from within the Shade's coat.")
    sleep.msleep(1500)
    console.log("\n     [BOSS SHADE] TIME TO DIE!!")
    gameOver = true
}

////////////
///EVENT///
//////////
function randomEvent(){
    var eventChance = Math.floor(Math.random() * event.length)
    console.log(event[eventChance].description)
    if(event[eventChance].action === 'player.health += 10'){
        player.health +=10
    }else if(event[eventChance].action === 'player.health -= 5'){
        player.health-=5
    }
}
//////////////////
///TURN AROUND///
////////////////
function turnAround(){
    console.log("\n     You watch as " + lovedOne.name + " is dragged back into the deepest pits")
    console.log("     of the Underworld where they will reside for all eternity \n")
    gameOver = true
}

//////////
///RUN///
////////
function runAway(){
    var runChance = Math.ceil(Math.random() * 2)
    if(runChance === 1){
        console.log("\n     [SHADE] You got away!")
        run = true
    }
}

/////////////
///ATTACK///
///////////
function attack(battleMonster){
    var attackDamage = Math.ceil(Math.random() * 9) + player.baseAttack
    var itemChance = Math.floor(Math.random() * items.length)
    battleMonster.health -= attackDamage
    console.log("\n     [SHADE] You hit the " + battleMonster.name + " for " + attackDamage + " points")
    if(battleMonster.health <= 0){
        console.log("\n     [SHADE] You killed the " + battleMonster.name)
        if(battleMonster === monster[monster.length-1]){
            hasGrenade=true
        }
        if(itemChance === 0 || itemChance === 2){
            console.log("\n     [SHADE] You gained 1 health potion!")
            player.inventory[0].potion += 1
        }else if(itemChance === 1){
            console.log("\n     [SHADE] You gained 1 weapon and 5 base attack!")
            player.inventory[1].weapon += 1
            player.baseAttack += 5
        } 
    }else if(battleMonster.health >0){
        monsterAttack(battleMonster)
    }
        
        
}

/////////////////////
///MONSTER ATTACK///
///////////////////
function monsterAttack(battleMonster){
        var attackDamage = Math.ceil(Math.random(battleMonster.baseAttack) * (battleMonster.baseAttack + 10))
        console.log("\n     [SHADE] " + battleMonster.name + " hit you for " + attackDamage + " damage!")
        player.health -= attackDamage
    if(player.health <=0){
        console.log("\n     [SHADE] The " + battleMonster.name + " killed you.")
        sleep.msleep(1000)
        console.log("\n     [SHADE] You have failed " + lovedOne.name +". Their soul will reside with Hades for all eternity.")
        sleep.msleep(1500)
        gameOver = true
    }
}

////////////////
///INVENTORY///
//////////////
function inventory(){
    console.log("\n     Player inventory: Health Potions: " + player.inventory[0].potion + "| Weapons: " + player.inventory[1].weapon)
}
////////////
///STATS///
//////////
function stats(){
    console.log("\n     Player Health: " + player.health + " ")
    console.log("\n     Player Base Attack: " + player.baseAttack + " ")
}

///////////////////
///DRINK POTION///
/////////////////
function drinkPotion(){
    if(player.inventory[0].potion > 0){
        console.log("\n     You drank a health potion and gained 20 health")
        player.health += 20
        player.inventory[0].potion -= 1
    } else if( player.inventory[0].potion <= 0){
        console.log("\n     You don't have any potions")
    }
}

//////////////////////////////////////////////////
// GAME START////////////////////////////////////
////////////////////////////////////////////////
player.name = ask.question("     [HADES] Who are you to enter my domain? ")
console.log("\n     [HADES] Well hello " + player.name + ", welcome to the Underwold.")
sleep.msleep(500)
lovedOne.name = ask.question("\n     [HADES] Who are you here for? ")
// sleep.msleep(500)
// console.log("\n     [HADES] If you want " + lovedOne.name + " back, your task is simple. ")
// sleep.msleep(1000)
// console.log("\n     [HADES] Your task is to leave this place, and never turn back.")
// sleep.msleep(1000)
// console.log("\n     [HADES] " + lovedOne.name + " will follow you out")
// sleep.msleep(1000)
// console.log("\n     [HADES] If you fail in your task, or turn around, " + lovedOne.name +" will be mine forever.")
// sleep.msleep(1000)
// console.log("\n     [HADES] A shade will guide you on your journey. NOW GO!!")
// sleep.msleep(1000)

while(gameOver !== true){
    if(player.health <= 0){
        gameOver = true
    }
    var options = ["Walk", "Drink Potion", "Inventory", "Stats", "Turn Around"] // list of options for the player
    var choice = ask.keyInSelect(options, "     [SHADE] What would you like to do? ")
    var run = false
    if(choice === 0){
        walk()
    }else if(choice === 4){
        turnAround()
    }else if(choice === 1){
        drinkPotion()
    }else if(choice === 2){
        inventory()
    } else if(choice === 3){
        stats()
    }else if(choice === -1){
        if(ask.keyInYN("\n     [SHADE] Abandon " + lovedOne.name + " forever?")){
            turnAround()
        }
    }
    if(hasGrenade === true){
        if(ask.keyInYN("\n     [SHADE] are you ready to leave the Underworld?"))
        sleep.msleep(1000)
        bossFight()
    }



}