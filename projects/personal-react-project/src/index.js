import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import BeerProvider from './context/BeerProvider.js'
import './style.css'


ReactDOM.render(
    <BeerProvider>
        <App />
    </BeerProvider>, 
document.getElementById('root'))