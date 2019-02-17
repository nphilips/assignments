// const ask = require('readline-sync')

// ECMASCRIPT 6 (ES6)

// const & let (variable declarations)

// var name = "Rick"
// var age = 20

// const dob = "June 10, 1239"
// let age = 20
// age++

// const greeting = "hello"
// let local;
// Scope
    // Global & Local & lexical(bracket)

// function myFunction(){
//     console.log(greeting) // Works because you can reference an outer scope
//     if(2 === 2){
//         local = 'dog'
//         console.log(greeting)
//     }
//     return local // Does not work because you cannot reference an inner scope
//     return "stuff"
// }
// console.log(myFunction())

// const myFunction2 = function(){
//     console.log("function expression")
//     return "stuff"
// }

// myFunction2()




// Arrow functions (Fat arrow functions)

function add(num1, num2){
    return num1 + num2
}

const subtract = (num1, num2) => {
    if(typeof num1 === "number"){
        return num1 - num2
    }
}

// console.log(subtract(5, 3))

// const mutilply = function(num1, num2){
//     return num1 * num2
// }

// const multiply = (num1, num2) => num1 * num2

// const returnLastIndex = arr => arr[arr.length - 1] 

// function expressions can replace 'function' with '=>'
    // Single paramenter do not need ()
    // => has an implicit return
    // => does not include 'this'


// const arr = [1, 2, 3, 4, 5, 6]

// const evens = arr.filter(function(num){
//     if(num % 2 === 0){
//         return num
//     }
// })
// const evens = arr.map(num => num % 2 === 0 ? num : num + 2)
// console.log(evens)

// const arr = [1, 2, 3]

// const plus2 = arr.map(function(num){
//     return num + 2
// })

// const plus2ES6 = arr.map(num => num + 2)
// console.log(plus2ES6)

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sum = nums.reduce(function(total, num){
//     return total + num
// }, 0)
// console.log(sum)

// const sumES6 = nums.reduce((total, num) => total + num, 0)
// const sumES6 = nums.reduce((total, num) => {
//     if(num % 2 === 0){
//         total += num
//     }
//     return total
// }, 0)
// console.log(sumES6)


// const unsorted = [5, 23, 67, 223, 4, 56, 21]
// const sorted = unsorted.sort(function(a, b){
//     return a - b
// })
// console.log(sorted)

// const sortedES6 = unsorted.sort((a, b) => a - b)
// console.log(sortedES6)



// Default Parameters
function sum(num1 = 10, num2 = 10){
    // if(typeof num2 !== "number"){
    //     num2 = 10
    // }
    return num1 + num2
}

// const sum = (num1 = 10, num2 = 10) => num1 + num2

console.log(sum(4, 4)) // 8
console.log(sum(4))    // 14
console.log(sum())     // 20


let age = 10

// String Template Literals
const person = {
    name: `Morty`,
    age: 13,
    isScared: true,
    catchPhrase: "awh jeez"
}

person.name = "rick"


// console.log("Hi, my name is " + person.name + ", and I am " + person.age + ", and my catchphrase is " + person.catchPhrase + "!")
console.log(`Hi, my name is ${person.name}, and I am ${person.age}, and my catchphrase is ${person.catchPhrase}`)


console.log(`---------------
---------------
---------------`)
