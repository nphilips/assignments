import React from 'react'
import Name from './Name.js'
import Person from './Person.js'

// 1. Create a react app
// 2. Create your index.js and App.js
// 3. Create an array of something (numbers or strings)
// 4. Use map to put them all in JSX elements 

const App = () => {
    // const names = ["Rick", "Rick", "Morty", "Jerry", "Birdman"]
    // const mappedNames = names.map((name, i) => <h3 key={i}>{name}</h3>)
    // const mappedNameComponents = names.map((name, i) => <Name name={name} key={i}/>)

    const people = [
        {
            name: "Rick",
            age: 70,
            favColor: "teal",
            friends: ["Morty, Birdman"]
        },
        {
            name: "Morty",
            age: 13,
            favColor: "yellow",
            friends: ["Rick, Jerry, Birdman"]
        },
        {
            name: "Jerry",
            age: 54,
            favColor: "purple",
            friends: ["Morty"]
        },
        {
            name: "Birdman",
            age: 135,
            favColor: "brown",
            friends: ["Rick", "Morty"]
        }
    ]

    const mappedCharacters = people.map((character, i) => 
                                                <Person 
                                                    key={i} 
                                                    name={character.name} 
                                                    age={character.age} 
                                                    friends={character.friends}
                                                    favColor={character.favColor}/>)
    return (
        <div>
            <h1>Mapping React .map()</h1>
            { mappedCharacters }
        </div>
    )
}

export default App