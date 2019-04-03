import ReactDom from "react-dom"
import React from 'react'
import App from './App.js'
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './context/UserProvider.js'


ReactDom.render(
    <BrowserRouter>
        <UserProvider>
            <App/>
        </UserProvider>
    </BrowserRouter>, 
    document.getElementById('root'))