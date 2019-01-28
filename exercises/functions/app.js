// function sum(a, b){
//     return a + b
// }
// console.log(sum(5, 6))

// function largest(a, b, c){
//     if(a > b && a > c){
//         console.log(a)
//     } else if(b > a && b > c){
//         console.log(b)
//     } else if(c > a && c > b){
//         console.log(c)
//     } else{
//         console.log("Broken")
//     }
// }
///// OR
// function returnLargestOf3(a, b, c){
//     return Math.max(a,b,c)
// }
// console.log(returnLargestOf3(122, 22, 3))

// function returnLargestOf3(a, b, c){
//     var numsArray = [a, b, c]
//     var largest = 0;

//     for(var i = 0; i< numsArray.length; i++){
//         if(numsArray[i] > largest){
//             largest = numsArray[i]
//         }
//     }
//     return largest
// }
// console.log(returnLargestOf3(111, 23, 3))



// largest(11544, 25000, 1540)

// function evenOdd(i){
//     if(i % 2 === 0){
//         return i + " is even."
//     } else if(i % 2 !== 0){
//         return i + " is odd"
//     }
// }
// console.log(evenOdd(5))




// function stringSplit(a){
//     if (a.length<=20){
//         return a.split(" ")
//     } else if(a.length>20){
//         var halfString = a.length / 2
//         return a.splice("")
//     } else{
//         return "Broken"
//     }
// }
// console.log(stringSplit("I am a beautiful butterfly"))
