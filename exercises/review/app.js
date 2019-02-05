{/*function review
    // A funciton is a collection of statements that we can re-use

//// function declaration (hoisted)
// function generateHello(){
//     var a = "hello"
//     return a
// }

//// function Expression (not hoisted)
// var generateGoodbye = function(){
//     var b = "goodbye"
//     return b
// }
// console.log(generateGoodbye())

// var helloString = generateHello()
// console.log(helloString)

var randFunc = function(name){
    return name + ", my plumbus is bleeding"
}
console.log(randFunc("Harmony"))
*/}

// DOM - Document Object Model
//document.

    // - Interacting (Selecting DOM elements, editing, adding)
var display = document.getElementById('container') //Tells the DOM to look at div id="container"

var title = document.createElement('h1') //creates a h1 element labeled title

title.textContent = "hello world" // creates text content for the <h1>title</h1> element

title.style.backgroundColor = "purple" // tells the index that we want the background color to be purple

display.innerHTML = "<h1 class='title-class'>Hello World</h1>"  // short way... overides all html so should not be the last thing
display.appendChild(title) //Puts the title infromation into the display.




