import React from 'react'
import {withCount} from './context/CountProvider.js'

const App = (props) => {
    return(
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.increment}>+</button>
            <h1>{props.count}</h1>
            <button onClick={props.decrement}>+</button>
        </div>
    )
}

export default withCount(App)