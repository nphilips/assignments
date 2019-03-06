import React from 'react'
import {avecTheme} from './context/ThemeProvider.js'
import './style.css'

const App = props => {
    return(
        <div>
            <div className={`home-${props.theme}`}>
                <div className={`nav-${props.theme}`}>
                    <p>Home</p>
                    <p>Contact</p>
                    <p>Services</p>
                    <p>About</p>
                </div>
                <h1>
                    this is the home page, wooooo.
                    Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Ipsa cum sint reiciendis debitis, 
                    neque velit assumenda fuga, ea ex, 
                    quidem id enim. Iure blanditiis 
                    reiciendis magni doloribus a impedit 
                    repellendus.
                </h1>
            </div>
            <div>
                <button onClick={props.toggleTheme}>Change Theme to {props.theme=== "light" ? "dark" : "light"} !</button>
            </div>
        </div>
    )
}

export default avecTheme(App)