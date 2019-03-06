import React, {Component} from 'react'
import {withToggler} from './Toggle.js'

const App = props => {
    return(
        <div>
            {props.isToggled
                ?<div style={{backgroundColor: 'blue'}}>Here is one thing</div>
                :<div style={{backgroundColor: 'red'}}>Here is the other thing</div>
            }
            <div>
                <button onClick={props.toggler}>Toggle Me</button>
            </div>
        </div>
    )
}


export default withToggler(App)