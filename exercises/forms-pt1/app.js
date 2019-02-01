//var name = prompt("What is your name")
var form = document.myform
var nameInput = form.name
var ageInput = form.age

console.log(nameInput)
console.log(ageInput)

form.addEventListener("submit", function(event){
    event.preventDefault()
    alert("Hi, I am " + nameInput.value + " and I am " + ageInput.Value + " years old!")
})

//console.log(name)