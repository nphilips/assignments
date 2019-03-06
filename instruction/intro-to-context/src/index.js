import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.js'
import CounterProvider from './context/CounterProvider'

ReactDOM.render(
    <CounterProvider>
        <App/>
    </CounterProvider>,
    document.getElementById('root'))