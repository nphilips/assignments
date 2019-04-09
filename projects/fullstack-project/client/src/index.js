import ReactDom from "react-dom"
import React from 'react'
import App from './App.js'
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './context/UserProvider.js'
import GameProvider from "./context/GameProvider.js";


ReactDom.render(
    <BrowserRouter>
        <GameProvider>
            <UserProvider>
                <App/>
            </UserProvider>
        </GameProvider>
    </BrowserRouter>, 
    document.getElementById('root'))