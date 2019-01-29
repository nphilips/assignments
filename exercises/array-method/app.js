var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var indexOfOrange = fruit.indexOf("orange")

vegetables.pop();
vegetables.push(vegetables.length);
fruit.shift();
fruit.push(indexOfOrange);

//console.log("vegetables: " + vegetables)
//console.log("fruit: " + fruit)

var food = fruit.concat(vegetables)
food.splice(4,2);
food.reverse();

console.log(food.join())