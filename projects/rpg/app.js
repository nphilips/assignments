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
    health: 200,
    inventory:[
        {
            potion: 1
        },
        {
            weapon: 0
        }],
    baseAttack: 1
}

var boss = {
    name: "Shade",
    health: 300,
    baseAttack:15
}

var monster = [
    {
        name: "Minotaur",
        health: 25,
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25,
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25
        baseAttack: 0
    },
    {
        name: "Minotaur",
        health: 25
        baseAttack: 0
    },
    {
        name: "Cerberus",
        health: 30,
        baseAttack: 2
    },
    {
        name: "Cerberus",
        health: 30,
        baseAttack: 2
    },
    {
        name: "Cerberus",
        health: 30,
        baseAttack: 2
    },
    {
        name: "Cerberus",
        health: 30,
        baseAttack: 2
    },
    {
        name: "Cerberus",
        health: 30,
        baseAttack: 2
    },
    {
        name: "Hydra",
        health: 30,
        baseAttack: 6
    },
    {
        name: "Hydra",
        health: 30,
        baseAttack: 6
    },
    {
        name: "Hydra",
        health: 30,
        baseAttack: 6
    },
    {
        name: "Hydra",
        health: 30,
        baseAttack: 6
    },
    {
        name: "Hydra",
        health: 30,
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
    console.log(battleMonster.name + "health: " + battleMonster.health)
    while(battleMonster.health > 0 && player.health > 0 && run === false){
        var attackOptions = ["Run!", "Fight!", "Drink Potion","Stats", "Turn around"]
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
            stats()
        }else if(battleChoice === 4){
            turnAround()
        }else if(battleChoice === -1){
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
    console.log("\n     [BOSS SHADE] TIME TO DIE!! \n")


    console.log(boss.name + "Health: " + boss.health)
    while(boss.health > 0 && player.health > 0){
        var attackOptions = ["Fight!", "Drink Potion", "Stats", "Turn around"]
        var battleChoice = ask.keyInSelect(attackOptions, "     [" + lovedOne.name + "]   What will you do? ")
        if(battleChoice === 0){
            attackOnBoss(boss)
        }else if(battleChoice === 1){
            drinkPotion()
        }else if(battleChoice === 2){
            stats()
        }else if(battleChoice === 3){
            turnAround()
        }else if(battleChoice === -1){
            if(ask.keyInYN("\n     [SHADE] Abandon " + lovedOne.name + " forever?")){
                turnAround()
            }
        }
    }
    // gameOver = true
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

/////////////////////
///ATTACK ON BOSS///
///////////////////
function attackOnBoss(boss){
    var attackDamage = Math.ceil(Math.random() * 9) + player.baseAttack
    boss.health -= attackDamage
    console.log("\n     [" + lovedOne.name + "]   You hit the " + boss.name + " for " + attackDamage + " points")
    if(boss.health <= 0){
        console.log("\n     [" + lovedOne.name + "]   You killed the " + boss.name)
        sleep.msleep(2000)
        console.log("\n     [ORPHEUS] You have done what I could not.")
        sleep.msleep(1000)
        console.log("\n     [ORPHEUS] Congradulations " + player.name + " on completing your adventure!")
        sleep.msleep(1000)
        console.log("\n     [ORPHEUS] Enjoy the rest of you life with " + lovedOne.name + "!")
        sleep.msleep(1000)
        credits()

    }else if(boss.health >0){
        bossAttack(boss)
    } 
}

//////////////////
///BOSS ATTACK///
////////////////
function bossAttack(){
    var attackDamage = Math.ceil(Math.random() * 25) + boss.baseAttack
    console.log("\n     [" + lovedOne.name + "]   " + boss.name + " hit you for " + attackDamage + " points!")
    player.health -= attackDamage
    if(player.health <=0){
        console.log("\n     [" + lovedOne.name + "] The " + boss.name + " killed you.")
        sleep.msleep(1000)
        console.log("\n     [SHADE] You have failed " + lovedOne.name +". Their soul will reside with Hades for all eternity.")
        sleep.msleep(1500)
        gameOver = true
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
            console.log("\n     [SHADE] You acquired the Holy Hand Grenade!")
            sleep.msleep(1000)
            console.log("\n     [SHADE] You gained 20 base attack!")
            player.baseAttack += 20
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
        var attackDamage = Math.ceil(Math.random() * 10) + battleMonster.baseAttack
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
sleep.msleep(500)
console.log("\n     [HADES] If you want " + lovedOne.name + " back, your task is simple. ")
sleep.msleep(1000)
console.log("\n     [HADES] Your task is to leave this place, and never turn back.")
sleep.msleep(1000)
console.log("\n     [HADES] " + lovedOne.name + " will follow you out")
sleep.msleep(1000)
console.log("\n     [HADES] If you fail in your task, or turn around, " + lovedOne.name +" will be mine forever.")
sleep.msleep(1000)
console.log("\n     [HADES] A shade will guide you on your journey. NOW GO!!")
sleep.msleep(1000)

while(gameOver !== true){
    if(player.health <= 0){
        gameOver = true
    }else if(player.health >0){
        if(hasGrenade!== true){
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
        }else if(hasGrenade === true){
            var options = ["Walk", "Drink Potion", "Inventory", "Stats", "Turn Around", "Leave the Underworld"] // list of options for the player
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
            }else if(choice === 5){
                if(ask.keyInYN("\n     [SHADE] are you ready to leave the Underworld?"))
                sleep.msleep(1000)
                bossFight()
            }

        }
    }
}

//////////////
///CREDITS///
////////////
function credits(){
    console.log(" \n     CREDITS        CREDITS       CREDITS")
    sleep.msleep(1000)
    console.log(" \n     Lorem ipsum dolor amet shoreditch craft beer hexagon man braid meh etsy artisan.")
    sleep.msleep(1000)
    console.log(" \n     Austin actually unicorn celiac neutra woke keffiyeh mixtape ramps crucifix.")
    sleep.msleep(1000)
    console.log(" \n     Mixtape green juice mlkshk, godard pug narwhal readymade adaptogen portland bitters.")
    sleep.msleep(1000)
    console.log(" \n     Narwhal food truck cliche literally paleo meditation letterpress unicorn.")
    sleep.msleep(1000)
    console.log(" \n     Gluten-free hammock kombucha artisan dreamcatcher cardigan you probably haven't heard of them.")
    sleep.msleep(1000)
    console.log(" \n     Vape flannel hell of vinyl, semiotics adaptogen artisan direct trade.")
    sleep.msleep(1000)
    console.log(" \n     Fam pour-over semiotics, mlkshk yr thundercats tousled irony swag chicharrones slow-carb cardigan.")
    sleep.msleep(1000)
    console.log(" \n     Heirloom kombucha 90's hashtag jianbing, before they sold out whatever marfa viral cliche.")
    sleep.msleep(1000)
    console.log(" \n     Whatever keytar 8-bit kitsch craft beer. Cliche poke street art lomo put a bird on it vape lo-fi ethical post-ironic.")
    sleep.msleep(1000)
    console.log(" \n     Gastropub vaporware tote bag single-origin coffee next level pitchfork farm-to-table kale chips.")
    sleep.msleep(1000)
    console.log(" \n     Whatever keytar 8-bit kitsch craft beer. Cliche poke street art lomo put a bird on it vape lo-fi ethical post-ironic.")
    sleep.msleep(1000)
    console.log(" \n     Gastropub vaporware tote bag single-origin coffee next level pitchfork farm-to-table kale chips.")
    sleep.msleep(1000)
    console.log(" \n     Af fixie chambray jianbing, beard artisan pinterest twee hammock 90's blue bottle wolf freegan thundercats occupy.")
    sleep.msleep(1000)
    console.log(" \n     Next level four dollar toast health goth narwhal, ennui umami humblebrag mlkshk hot chicken.")
    sleep.msleep(1000)
    gameOver=true
}
