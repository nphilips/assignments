import React, { useState, useEffect } from 'react';
import axios from 'axios'

// useEffect
    // componentDidMount
    // componentDidUpdate
    // componentWillUnmount

// url: https://rickandmortyapi.com/api/character

// Example 1
// const App = () => {
//     const [characters, setCharacters] = useState([])

//     useEffect(() => {
//         // componentDidMount && componentDidUpdate
//         axios.get("https://rickandmortyapi.com/api/character")
//             .then(res => {
//                 setCharacters(res.data.results)
//             })
//             .catch(err => console.log(err))
//     }, [])


//     return (
//         <div>
//             {characters.map(c => )}
//         </div>
//     )
// }

const App = () => {
    const [color, setColor] = useState("blue")

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if(e.which === 82){
                setColor("red")
            }else if(e.which === 89){
                setColor("yellow")
            }else if(e.which === 71){
                setColor("green")
            }else if(e.which === 66){
                setColor('cornflowerblue')
            }
        })
        // componentWillUnmount
        return () => {
            window.removeEventListener('keydown', null)
        }
    })


    return(
        <div style={{width: 200, height: 200, backgroundColor: color}}>

        </div>
    )
}

export default App