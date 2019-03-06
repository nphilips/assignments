import React from 'react'
import {withCounter} from './context/CounterProvider'
import Test from './Test.js'

const App = props => {
    
    return(
        <div>
            <h1>{props.counter}</h1>
            <button onClick={props.increment}>Increments</button>
            <Test />
        </div>
    )
}

export default withCounter(App)