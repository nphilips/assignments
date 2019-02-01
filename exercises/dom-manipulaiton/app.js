// Selecting HTML Elements from the DOM, for use in our Js.
// grab by ID, class, tag

// var title = document.getElementById('title')
// //var texts = document.getElementsByClassName('text')
// var pTags = document.getElementsByTagName('p')

// console.log(title)
// //console.log(texts)
// console.log(pTags)

var myH1 = document.createElement('h1')
myH1.textContent = "I live in the JS"  // <h1>"Hello World"</h1>
myH1.innerHTML = "<h2>I live in the JS</h2>" // <h2>"Hello World"</h2>
var div1 = document.getElementById('div1')
div1.appendChild(myH1)

console.log(myH1)

var pTag = document.getElementsByClassName('my-class')
pTag[0].classList.add('highlight')
//pTag[0].classList.remove('highlight')

////////////////////////////////////////////////////////

var myImg = document.createElement('img')
myImg.setAttribute("src", "https://images.unsplash.com/photo-1548744581-9a0edf9c24b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
myImg.style.width = '200px'
myImg.style.height = '200px'
div1.appendChild(myImg)

console.log(pTag[0])

////////////////////////////////

var helloBtn = document.getElementById('hello-btn')
helloBtn.addEventListener('click', sayHello)
// named functions
function sayHello(){
    alert("Hello!")
}

///////////////////////////////

// anonymous function - functions that don't have a name
var helloBtnTwo = document.getElementById("hello-btn2")
helloBtnTwo.addEventListener('click', function(){
    alert('Hello 2')
})

//////////////////////////

// Even Object: all information about the given event
var helloBtnThree = document.getElementById('hello-btn3')
helloBtnThree.addEventListener('click', sayHello)

window.addEventListener('keypress', function(event){
    console.log(event)
})

