import React from 'react'
import {withCounter} from './context/CounterProvider.js'

const Test = props => {
    return(
        <div>
            Hello World
        </div>
    )
}

export default withCounter(Test)