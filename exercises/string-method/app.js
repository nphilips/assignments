// // Strings and string Methods

// var myStr = "Sunny Day"
// console.log(myStr[0])
// console.log(myStr[myStr.length - 1])

// var newStr = "hello "
// console.log(newStr)
// var split = newStr.split("")
// console.log(split)

// console.log(myStr)
// console.log(myStr.toUpperCase())
// console.log(myStr.toLowerCase())
// console.log(newStr.concat(myStr))

// var randomStr = "abcdefghijklmnopqrstuvwxyz"
// console.log(randomStr.indexOf("j"))
// console.log(randomStr.indexOf("h"+"a"+""+"r"+"m"+"o"+"n"+"y"))
// var sliceThisString = "bananas"
// console.log(sliceThisString)
// console.log(sliceThisString.slice(1,3))
// console.log(sliceThisString.slice(1))
// console.log(sliceThisString.slice(3))


// var strHello = "hElLo "
// var helloWorld = "Hello World"
// //console.log(strHello + strHello.toUpperCase() + strHello.toLowerCase())

// //console.log(Math.floor(234/5))
// var delLett = strHello.length / 2
// var delWorld = helloWorld.length / 2

// strHello.slice(strHello.length- delLett, strHello.length)
// helloWorld.slice(helloWorld.length - delWorld, helloWorld.length)
// console.log(strHello)
// console.log(helloWorld)

// function capilizeAndLowercase(str){
//     var middle = Math.floor(str.length / 2)
//     var str1= str.slice(0,middle).toUpperCase()
//     var str2= str.slice(middle).toLowerCase()
//     return str1+ str2
// }

// console.log(capilizeAndLowercase("Hello")) // => "HEllo"
// console.log(capilizeAndLowercase("Hello World")) // => "HELLO world"

function capitalize(str){
    var splitWords = str.split(" ")
    for(var i=0; i<splitWords.length; i++){
        splitWords[i] = splitwords[i][0].toUpperCase() + splitWords[i].slice(1)
    }
    return splitWords.join(" ")
}

console.log(capitalize("hey friends! practice practice practice"))