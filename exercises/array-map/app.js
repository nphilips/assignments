// function doubleNumbers(arr){
//     return arr.map(function(doubleArr){
//         return doubleArr * 2
//     })
// }

// console.log(doubleNumbers([2, 5, 100]));

/////////////////////////////////////////////////////

// function stringItUp(arr){
//     return arr.map(function(arrString){
//         return arrString.toString();
//     })
// }
  
// console.log(stringItUp([2, 5, 100]));

/////////////////////////////////////////////////////

// function capitalizeNames(arr){
//     return arr.map(function(capName){
//         var lower = capName.toLowerCase();
//         // console.log(lower)
//         var capName = lower[0].toUpperCase()+lower.slice(1, (lower.length));
//         // console.log(upper)
//         return capName
//     })
    
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

///////////////////////////////////////////////////////////////////////////////////

// function namesOnly(arr){
//     return arr.map(function(arr){
//         return arr.name
//     })
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));

////////////////////////////////////////////

function makeStrings(arr){
    return arr.map(function(arr){
        if (arr.age > 17){
            return arr.name + " is allowed to go to The Matrix"
        } else{
            return arr.name + " is not allowed to go to The Matrix"
        }
    })
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));



