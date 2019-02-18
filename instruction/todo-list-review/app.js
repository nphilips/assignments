// ES6 Classes

    // Person => Creates objects
    // function Person(name, age, catchPhrase){
    //     this.name = name
    //     this.age = age
    //     this.catchPhrase = catchPhrase
    // }

    // Person.prototype.speak = function(){
    //    return this.catchPhrase
    // }

    // Person.prototype.dance = function(){
    //     console.log("ooh im dancing")
    // }

    // Blueprint for objects
    class Person {
        // Everything it means to be a person
        constructor(name, age, catchPhrase, hairColor){
            this.name = name
            this.age = age
            this.catchPhrase = catchPhrase
            this.hairColor = hairColor
        }
        // // What people do
        speak(){
            return this.catchPhrase
        }

        setHairColor(newColor){
            this.hairColor = newColor
            return this.hairColor
        }
    }

    // const harry = new Person("harry", 14, "Huzaah", "black")
    // const ron = new Person("ron", 14, "Scabbers!!")

    // console.log(harry)
    // console.log(harry.setHairColor("white"))
    // console.log(harry)
    // console.log(ron.speak())



// ES6 - REST - Spread - Arrow functions 
    // Object destructuring and literals

// REST(Gather) & SPREAD

   // ...
    // REST
    // function mathMax(...nums){
    //     console.log(nums)
    // }

    // mathMax(35, 23, 12, 5, 65, 75, 23, 43)

    // Spread
        // Objects & arrays & strings
        // let str = "hello world"

        // let arr1 = ['blue', 'yellow']
        // let arr2 = ['red', 'green']

        // let rick = {
        //     name: "Rick",
        //     age: 70
        // }

        // console.log([...str])
        // console.log(str.split(''))

        // console.log(arr1.concat(arr2))
        // console.log([...arr1, "purple", ...arr2])
        // console.log([...arr1, ...str, ...arr2])
        // let morty = {...rick}
        // morty.age++

        // console.log(rick)  // 70
        // console.log(morty) // 71



    // Arrow Functions
    function printLastElement(arr){
        return arr[arr.length - 1]
    }
    const printLastElementES6 = arr => arr[arr.length - 1]
    

    function sum(a, b){
        return a + b;
    }
    const sumES6 = (a, b) => a + b;
    // console.log(sumES6(3, 4));

    const nums = [1, 2, 3, 4, 5, 6, 7, 8];

    const onlyEvens = nums.filter(function(number){
        if(number % 2 === 0){
            return number;
        }
    })

    const onlyEvensES6 = nums.filter(number => number % 2 === 0 ? true : false)
    // console.log(onlyEvensES6)

    const totalCount = nums.reduce(function(final, num){
        return final += num
    }, 0)

    const totalCountES6 = nums.reduce((final, num) => final += num, 0)
    // console.log(totalCountES6)

    const totalEvenCountES6 = nums.reduce((final, num) => num % 2 === 0 ? final += num : final, 0)
    // console.log(totalEvenCountES6)


    













// CSS Grid - ZEN Garden

