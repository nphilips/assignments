// function fiveAndGreaterOnly(arr) {
//     return arr.filter(function(arr){
//         if(arr > 5){
//             return arr
//         }
//     })
//   }
//   // test
//   console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

/////////////////////////////////////////////////////

// function evensOnly(arr) {
//     return arr.filter(function(arr){
//         if(arr % 2 === 0){
//             return arr
//         }
//     })
//   }
//   // test
//   console.log(evensOnly([3, 6, 8, 2]));

////////////////////////////////////////////////////

// function fiveCharactersOrFewerOnly(arr) {
//     return arr.filter(function(arr){
//         if(arr.length <= 5){
//             return arr
//         }
//     })
//   }
//   // test
//   console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

////////////////////////////////////////////////////////////////////////////////////////////////

function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(function(arr){
        if(arr.member === false){
            return arr.name + " doesn't belong to the club." 
        }
    })
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      {
          name: "Angelina Jolie",
          member: true
      },
      {
          name: "Eric Jones",
          member: false
      },
      {
          name: "Paris Hilton",
          member: true
      },
      {
          name: "Kayne West",
          member: false
      },
      {
          name: "Bob Ziroll",
          member: true
      }
  ]));


