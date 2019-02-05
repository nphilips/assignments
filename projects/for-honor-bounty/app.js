var reputation = document.reputation
var countReputation = document.getElementById('reputationTotal')

reputation.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(reputation)

    var soldierValue = parseInt(reputation.soldier.value)
    var soldierKills = parseInt(reputation.soldier.value)
    
    var commanderValue = parseInt(reputation.commander.value) * 5
    var commanderKills = parseInt(reputation.commander.value)
    
    var heroValue = parseInt(reputation.hero.value) * 10
    var heroKills = parseInt(reputation.hero.value)

    var killerScore = heroKills + commanderKills + soldierKills
    var totalRep = soldierValue + heroValue + commanderValue

    var killerText = document.createElement('h1')
    var repText = document.createElement('h1')

    killerText.textContent = "Final Kill Count: " + killerScore
    repText.textContent = "Your Reputation: " + totalRep

    var reputationTotal = document.getElementById('reputationTotal')
    reputationTotal.appendChild(killerText)
    reputationTotal.appendChild(repText)
})


// function calc(){

//     var a = document.querySelector("#value1").value;
//     var b = document.querySelector("#value2").value;
//     var operator = document.querySelector("#operator").value;
//     var calculate;

//     if (op == "add"){
//         calculate = a+b;
//     } else if (op == "min"){
//         calculate = a - b;
//     }
//     } else if (op == "mul"){
//         calculate = a * b;
//     }
//     } else if (op == "div"){
//         calculate = a / b;
//     }

//     console.log (calculate)
// }

