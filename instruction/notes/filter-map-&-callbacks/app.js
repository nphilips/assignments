// Higher order methods
    // take one or more functions as an argument
        // or/and
    // returns a function

// Higher order array methods take a function as an argument, these arguments are referred to as 'callback' functions.
// callback
    // functions that passed into another function as a argument
    // that are then used(called) in that function

// Example of a callback being used
    // function compute(num1, num2, callback){
    //     return callback(num1, num2)
    // }

    // function add(num1, num2){
    //     return num1 + num2
    // }

    // function subtract(num1, num2){
    //     return num1 - num2
    // }

    // console.log(compute(3, 5, add))      // 8
    // console.log(compute(6, 3, subtract)) // 3

// Another example of callbacks
    // function returnNewArray(arr, callback){
    //     var result = []
    //     for(var i = 0; i < arr.length; i++){
    //         var current = callback(arr[i])
    //         if(current){ 
    //             result.push(current)
    //         }
    //     }
    //     return result
    // }

    // function greaterThan3(num){
    //     if(num > 3){
    //         return num
    //     } else {
    //         return null
    //     }
    // }

    // console.log(returnNewArray([1, 2, 3, 4, 5, 6], greaterThan3))



// Higher order array methods

// var arr = [1, 2, 3, 4, 5]
// var newArr = []
// forEach, loops over the arr and always returns nothing
    // arr.forEach(function(num){
    //     if(num % 2 === 0){
    //         newArr.push(num)
    //     }
    // })

    // for(var i = 0; i < arr.length; i++){
    //     if(arr[i] % 2 === 0){
    //         newArr.push(arr[i])
    //     }
    // }
    // console.log(newArr)



// Filter //
// Loops through your array, and creates/returns a new array from filtered data
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var result = numbers.filter(function(num){
//     if(num % 2 === 0){
//         return num
//     }
// })

// var evensArr = []
// for(var i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         evensArr.push(numbers[i])
//     }
// }

// console.log(evensArr)
// console.log(result)


var users = [
    {
        name: "joe",
        age: 20
    },
    {
        name: "morty",
        age: 13
    },
    {
        name: "rick",
        age: 70
    },
    {
        name: "birdman",
        age: 100
    }
]

// .filter() will return the entire 'user', or it will return nothing if user's age is not greater than 50.

function peopleOver50(arr){
    var over50 = arr.filter(function(user){
        if(user.age > 50){
            return user
        }
    })
    return over50
}

console.log(peopleOver50(users))

// .map() => returns a new array containing an item for EVERY item in the original array
function userNames(arr){
    var usernames = arr.map(function(user){
        return user.name
    })
    return usernames
}

console.log(userNames(users))


// Combining a filter and then map to get a filtered result of just usernames
var over50 = users
    .filter(function(user){
        if(user.age > 50){
            return user
        }
    })
    .map(function(user){
        return user.name
    })

console.log(over50) // ["rick", "birdman"]











