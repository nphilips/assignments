import React from 'react'
import {avecTheme} from './context/ThemeProvider.js'
import './style.css'

const App = props => {
    return(
        <div>
            <div className={`home-${props.theme}`}>
            <p>asdfasdqsdfadsfasdasasd</p>
                this is the home page, wooooo.
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. 
                Ipsa cum sint reiciendis debitis, 
                neque velit assumenda fuga, ea ex, 
                quidem id enim. Iure blanditiis 
                reiciendis magni doloribus a impedit 
                repellendus.
            </div>
            <div>
                <button onClick={props.toggleTheme}>Change Theme to {props.theme=== "light" ? "dark" : "light"} !</button>
            </div>
        </div>
    )
}

export default avecTheme(App)