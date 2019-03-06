import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.js'
import UgliesProvider from './context/UgliesProvider.js'

ReactDOM.render(
    <UgliesProvider>
        <App/>
    </UgliesProvider>, 
    document.getElementById('root'))