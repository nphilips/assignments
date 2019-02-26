import React from 'react'
import Display from './Display.js'

const App = () => {

    const style = {}
    let elementToShow
    switch(props.age){
        case 25:
            elementToShow=<h1>You are 25</h1>
            style.backgroudColor = 'red'
            break;
        case 30:
            elementToShow=<h1>You are 30</h1>
            style.backgroundColor= 'blue'
            break;
        default:
            elementToShow= <h1>I am not sure of you age</h1>
            style.backgroundColor = 'green'

    }
    return(
        <div style={style}>
            {props.isAuthenticated && <button>Logout</button>}
            {elemenetToShow}
            <Display greeting="Random"/>

        </div>
    )
}

export default App