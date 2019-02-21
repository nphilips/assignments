import React from 'react'
import Char from './Char.js'

function App(){
    const chars = ['Raider', 'Berserker', 'Warlord', 'Shaman', 'Valk']
    // const charList=chars.map((char) => <li>{char}</li>)
    const charList = chars.map((char, i) => <Char char={char} key={i}/>)

    return(
        <div>
            <h1>For Honor Characters</h1>
            {charList}
        </div>
    )
}

export default App