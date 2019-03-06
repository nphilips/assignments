import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.js'
import ThemeProvider from './context/ThemeProvider.js'

ReactDOM.render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>, 
document.getElementById('root'))