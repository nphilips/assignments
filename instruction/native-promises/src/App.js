// Promises:
    // Resolve
    // Reject

function flipCoin(){
    const num = Math.floor(Math.random() *2)
    if(num === 0){
        return "Heads"
    }else {
        return "Tails"
    }
}

function testFlipCoin(){
    return new Promise((resolve, reject) => {
        const side = flipCoin()
        if(side === "Heads"){
            resolve("It was Heads!")
        } else if(side === "Tails"){
            reject("It was Tails!")
        }
    })
}

testFlipCoin()
        .then(response => console.log("Response " + response))
        .catch(error => console.log("Error " + error))

