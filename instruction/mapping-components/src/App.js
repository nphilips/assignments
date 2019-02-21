import React from 'react'
// import Name from './Name.js'
import Person from './Person.js'

const App = () => {
    // const names = ["Rick", "Morty", "Jerry", "Birdman"]

    // const mappedNames =names.map((name, i) => {
    // return <h1 key={i}> {name}</h1>
    // })
    // const mappedNameComponents = names.map((name, i) => <Name name={name}/>)

    const people = [
        {
            name:"Rick",
            age: 70,
            favColor: "teal",
            friends: ["Morty", "Birdman"]
        },
        {
            name: "Morty",
            age: 13,
            favColor: "yellow",
            friends: ['Rick', 'Jerry', 'Birdman']
        },
        {
            name: "Jerry",
            age: 54,
            favColor: 'purple',
            friends: ['Morty']
        },
        {
            name:"Birdman",
            age: 135,
            favColor: 'brown',
            friends: ['Rick', 'Morty']
        }
    ]

    // const mappedCharacters = people.map((character, i) => 
    //                         <Person 
    //                         name={character.name} 
    //                         age={character.age} 
    //                         favColor={character.favColor} 
    //                         key={i}/>)

    return(
        <div>
            <h1>Mapping in React .map()</h1>
            {people.map((character, i) => 
                                            <Person 
                                            name={character.name} 
                                            age={character.age} 
                                            favColor={character.favColor}
                                            friends={character.friends} 
                                            key={i}/>)}
        </div>
    )
}

export default App