import ReactDOM from 'react-dom'
import React from 'react'
import CountProvider from './context/CountProvider.js'
import App from './App.js'

ReactDOM.render(
    <CountProvider>
        <App/>
    </CountProvider>,
    document.getElementById('root'))