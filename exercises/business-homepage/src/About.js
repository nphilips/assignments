import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

function About(){
    return(
        <div>
            <h1>I'm in the About.js File</h1>
        </div>
    )
}

// export default About
ReactDOM.render(<About/>, document.getElementById('root'))