{/* Preliminaries
var ranVar = 5;
var catLen = "Cat"


if(ranVar > 3){
    console.log(ranVar + " is greater than " + 3);
} else{
    console.log("ranVar broke");
}

if (catLen.length === 3){
    console.log(catLen + " is the length: 3")
} else{
    console.log("catLen broke")
}

if ("cat" === "dog"){
    console.log("Cat Dog is broken")
} else{
    console.log("Cat is not the same as dog!")
}


// Write an if statement that prints "is greater than" if 5 is greater than 3
// Write an if statement that prints "is the length" if the length of "cat" is 3
// Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal. */
}

{/* Bronze Medal
// var person = {
//     name: "Bobby",
//     age: 12
//   }

//   if(person.age >= 18){
//       console.log(person.name + " is old enough to go to that movie.")
//   } else {
//       console.log(person.name + " is not old enough to go to that movie.")
//   }

// if (person.name[0] === "B"){
//     console.log(person.name + " can go to the movies.")
// } else {
//     console.log(person.name + " is not allowed to go to the movies.")
// }

// if(person.name[0] === "B" && person.age >= 18){
//     console.log(person.name + " can go to the movies")
// } else {
//     console.log(person.name + " isn't allowed to go to the movies")
// }

//   1) Using the below object, write an if statement that prints <theNameOfThePersonInObject> 
//      is allowed to go to the movie if they are old enough 
//      (18 or older), and the opposite if they are not older than 18.
//   2) Using that same object, only allow them into the movie if their name starts with "B"
//   3) Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
*/}

{/* Silver Medal
// if(1 === "1"){
//     console.log("strict")
// } else if(1 == "1"){
//     console.log("loose")
// } else{
//     console.log("Not equal at all.")
// }

// if(1>=2 && 2===4 || 3*4>10 && 5+10>10){
//     console.log("YES!!")
// } else{
//     console.log("...no...")
// }

//     1) Write an if/else if/else statement that prints 
// "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, 
// and prints "not equal at all" if it doesn't print the other stuff.
//     2) Write an if statement that prints "yes" if 1 is less than or equal to 2 and 2 is equal to 4
//         OR!!!
//         3 * 4 is greater than 10 and 5 plus 10 is greater than 10.
*/
}


// var dog="dog"
// if(typeof dog === "string"){
//     console.log("true")
// } else{
//     console.log("false")
// }

// if (typeof true==="boolean"){
//     console.log("boolean")
// } else{
//     console.log("broken")
// }

// if( undeclaredVariable==='undefined'){
//     console.log("undefined")
// } else{
//     console.log("broken")
// }

// if("a">= 10){
//     console.log("yes")
// } else if("a"<=10){
//     console.log("yes 2")
// } else{
//     console.log("broken")
// }

var s = "s"
if(s>5){
    console.log("s is greater than 5")
} else if("s" <= 5){
    console.log("s is not greater than 5")
} else{
    console.log("the code is not working")
}


// for(var i=0; i<=15; i++){
//     if(i%2 === 0){
//         console.log(i + " is an even number")
//     } else{
//         console.log(i + " is an odd number")
//     }
// }

//  1) Write an if statement that checks to see if "dog" is a string
//  2) Write an if statement that checks to see if "true" is a boolean
//  3) Write an if statement that checks to see if a variable has been defined or not
//  4) Write an if statement comparing letters to numbers using < and >. 
//     Try to figure out what letters are going to be "greater than" other numbers or letters. 
//     For example: is "s" greater than 12?
//  5) Write a ternary statement that console.logs whether a number is odd or even. For example:
