import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import BeerProvider from './context/BeerProvider.js';

ReactDOM.render(
    <BrowserRouter>
        <BeerProvider>        
            <App />
        </BeerProvider>
    </BrowserRouter>, 
document.getElementById('root'))