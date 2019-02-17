// ES6 Classes - syntactic sugar

// Constructor Function
// function Vehicle(make, model){
//     this.make = make
//     this.model = model
// }

// // Adding methods to a Constructor's prototype
// Vehicle.prototype.honk = function(){
//     console.log('honk');
// }

class Vehicle{
    constructor(make, model, wheels){ // What it means to be a vehicle
        this.make = make
        this.model = model
        this.wheels = wheels
    }
    // What do Vehicles Do?
    honk(){
        console.log("honk");
    }
    drive(){
        console.log('vroooom');
    }
    breakDown(){
        console.log('sputter sputter');
    }

}

class MotorCycle extends Vehicle{
    constructor(make, model, wheels, hasSideCar){
        super(make, model, wheels)
        this.hasSideCar = hasSideCar
    }
}

const myCar = new Vehicle("Mazda", "hatchback")
const myBike = new MotorCycle("Harley", "cool", false)

// Extends = make a class inherit features from another class (Parent).




// console.log(myCar);
// myCar.honk()



// class Student {
//     constructor(name, studyTopic, school, stress){
//         this.name = name
//         this.studyTopic = studyTopic
//         this.school = school
//         this.stress = stress
//     }
//     study(){
//         console.log(`I'm studying ${this.studyTopic}`);
//     }

//     learn(){
//         console.log("Lerned gud");
//     }

//     cry(){
//         console.log("waaah");
//     }
// }

// const harryPotter = new Student ("Harry", "Wizzardry", "Hogwarts", "Max (aka Voldemort)")

// harryPotter.study()