// ES6 Classes

// Person => creates objects
// function Person(name, age, height, catchPhrase){
//     this.name = name
//     this.age = age
//     this.height = height
//     this.catchPhrase = catchPhrase
//     // this.speak = function(){
//     //     console.log("I'm a wizzard");
//     // }
// }

// Person.prototype.speak=function(){
//     return this.catchPhrase;
// }
// Person.prototype.dance=function(){
//     console.log("I'm dancing");
// }
    // Blueprint for Classes
// class Person{
//     // Everything it means to ve a person
//     constructor(name, age, height, catchPhrase, hairColor){
//         this.name = name
//         this.age = age
//         this.height = height
//         this.catchPhrase = catchPhrase
//         this.hairColor = hairColor

//     }
//     //What People do
//     speak(){
//         return this.catchPhrase
//     }

//     setHairColor(newColor){
//         this.hairColor = newColor
//         return this.hairColor
//     }
// }


// const harry = new Person("Harry", 14, 60, "Huzaah", "black")
// const ron = new Person("Ron", 14, 66, "Scabbers")
// console.log(harry);
// console.log(harry.setHairColor("white"));
// console.log(harry);
// console.log(ron.speak());

///////////////////////////////////////////////////////

// ES6 - REST - SPREAD - Arrow functions
    //Object destructuring and literals

// REST (Gather) & SPREAD   ...

    // ...
        //REST
        // function mathMax(...nums){
        //     return Math.max(nums)

        // }
        // console.log(mathMax(12,23,34,45,56,67));
        // // mathMax(12,23,34,45,56,67)

        // Spread
            // Ovjects & arrays & strings
            // let str = "hello world"
            // let arr1 = ["blue", "yellow"]
            // let arr2 = ["red", "green"]
            // let rick = {
            //     name: "rick",
            //     age: 70
            // }
            // console.log([...str]);
            // console.log(str.split(''));

            // // console.log(arr1.concat(arr2));
            // console.log([...arr1, "purple", ...arr2]);
            // console.log([...arr1, ...str, ...arr2]);
            // let morty = {...rick}

            // morty.age++
            // console.log(rick);
            // console.log(morty);

//////////////////////////////////////////////////////////////

// Arrow Functions

// function printLastElement(arr){
//     return arr[arr.length -1]
// }
//                             //Dont need the () if only one argument
// const printLastElementES6 = (arr) => arr[arr.length - 1]
// //
// //
// function sum(a,b){
//     return a+b
// }
// const sumES6 = (a,b) => a+b
// //
// //
// const nums = [1,2,3,4,5,6,7,8,9]

// const onlyEvens = nums.filter(function(number){
//     if(number % 2 === 0){
//         return number
//     }
// })
// const onlyEvensES6 = nums.filter(number => number % 2 === 0 && number)
// //                                       //if this^       then this^    
// //
// const totalCount = nums.reduce(function(final, num){
//     return final += num
// }, 0)
// const totalCountES6 = nums.reduce((final, num) => final += num)
// //
// //
// const totalEvenCountES6 = nums.reduce((final,num) => num % 2 === 0 ? final += num : final, 0)
// console.log(totalEvenCountES6);





// GET, POST, PUT, DELETE - Todo project
    //DOM Manipulation





// CSS grid - Zen Garden