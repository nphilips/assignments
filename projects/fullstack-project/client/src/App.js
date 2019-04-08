import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import {withUser} from './context/UserProvider.js'
import AuthContainer from './components/auth/AuthContainer.js'
import Home from './components/Home.js'
import ProtectedRoute from './shared/ProtectedRoute.js';
import NotFound from './components/NotFound.js'
import "./styling/style.css"
import './styling/user.css'
import './styling/home.css'

// Auth
    // Form for login and signup
// UserProvider - context

// Dependencies
    // axios, react-router-dom, prop-types

const App = (props) => {
    const {user, token} = props
    // document.title = props.location.pathname.slice(1)[0].toUpperCase() + props.location.pathname.slice(2)
    
    return (
        <div>
            {token && <button onClick={props.logout}>Logout</button>}
            {!token && <button onClick={() => props.history.push("/login")}>login</button>}
            <Switch>
                <Route exact path="/" render={() => token ? <Redirect to="/home"/> : <Redirect to="/login"/>}/>
                <Route 
                    path="/login" 
                    render={rProps => token ? <Redirect to="/home"/> : <AuthContainer {...rProps}/>}/>
                <ProtectedRoute 
                    token={token}
                    path="/home"
                    redirectTo="/login"
                    component={Home}
                    username={user.username}
                    logout={props.logout}
                />
                <Route path="*" component={NotFound}/>
                {/* <Route
                    path="/home"
                    render={rProps => !token ? <Redirect to="/login"/> : <Home {...rProps}/>}/> */}
            </Switch>
        </div>
    )
}


export default withUser(App)