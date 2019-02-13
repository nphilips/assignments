// Web Storage
    // Databases //
    // Cookies //

    // Local Storage
        // Permanent until deleted
    // Session Storage
        // Delets itself when browser closes

    // They can only store strings


localStorage.setItem("name", "Joe")
localStorage.setItem("age", 20)
var friends = ["mary", "bill", "mark"]

localStorage.setItem('friends', JSON.stringify(friends))

var address = {
    city: "SLC",
    street: "123 street",
    st: "Utah"
}
localStorage.setItem('address', JSON.stringify(address))

var name = localStorage.name
console.log(name)


var friendsArr = JSON.parse(localStorage.friends)
var addressObj = JSON.parse(localStorage.getItem('address'))

console.log(name)
console.log(friendsArr)
console.log(addressObj)