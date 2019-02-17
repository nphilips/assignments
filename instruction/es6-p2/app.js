// const namesReadyForTheDOM = people.map(person => `<h1>My name is ${person.name} and I am ${person.age} years old</h1>`)




// Rest (Gather) & Spread
// ... === rest & spread
    // Rest: Only used in a function parameter
    // console.log(Math.max(32, 49, 1, 25, 69, 85, 93, 900))
    // function myMathMax(...nums){
    //     console.log(nums);
    // }
    // myMathMax(32, 49, 1, 25, 69, 85, 93, 900)

    // Spread: Anytime ... is used outside of a funciton parameter.
    // const colors1 = ["blue", "green"]
    // const colors2 = [ "red", "purple", "yellow"]

    // function concatColors(arr1, arr2){
    //     return [...arr1, ...arr2, "grey"]
    // }
    
    // console.log(concatColors(colors1, colors2));
    // let person = {
    //     name: "Rick", 
    //     age: 70, 
    //     sayName: function(name){
    //         console.log(this.name);
    //     }}
    // // let newPerson = {...person}
    // let newPerson = {...person, age: 15}
    // console.log(newPerson)



    // Object Literals

    // const blue = "Blue"
    // const red = "Red"
    // const yellow = "Yellow"

    // const colors = {blue, red, yellow}
    // const colorsCopy = {...colors}

    // console.log(colors);
    // console.log(colorsCopy);

    // Object Destructuring

    // const{blue, red, yellow} = color

    const dinosaur = {
        type: "T-rex",
        armLength: "short",
        temper: "high"
    }

    const {type, armLength, temper} = dinosaur

    console.log(type);
    console.log(armLength);
    console.log(temper);


    // Import / Export

    // Import: Require
    // Export: module.exports

    export funciton(){
        console.log("dsfasdfjlaskdfasdf")
    }

    const ask = require('readline-sync')
    import ask from 'readline-sync'
    
    module.exports = { sum }
    export{sum, sub, mul}
    export default sum

    import sum from './app.js'
    import {sum, sub, mul} from './app.js'
    