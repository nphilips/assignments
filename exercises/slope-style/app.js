// function collectAnimals(...animals) {  
//     return animals
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 

// function combineFruit(fruit, sweets, vegetables){
//     return food = {
//         fruit,
//         sweets,
//         vegetables
//     }
// }

// console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
// const {location, duration} = vacation

//   function parseSentence(){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
//   console.log(parseSentence());

// function returnFirst(items){
//     const [firstItem] = items; /*change this line to be es6*/
//     return firstItem
// }

// console.log(returnFirst([12,34,45,56,67]));

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, secondFav, thirdFav] = arr
//     return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))

// function combineAnimals(...arr) {  
//     console.log([].concat(...arr));
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function product(a, b, c, d, e) {  
//     const numbers = [a,b,c,d,e];
  
//     return numbers.reduce((acc, number) => acc * number, 1)
//   }
// console.log(product(1,2,3,4,5));

// function unshift(array, a, b, c, d, e) {  
//     return [a, b, c, d, e].concat(array);
//   }
//   console.log(unshift([12,23,34,45,56],'a','b','c','d','e'))

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const {firstName, lastName} = name
        return `First name: ${firstName}, Last Name: ${lastName}`
    }
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]