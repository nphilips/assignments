import React from 'react';
import {Switch, Route, Redirect, withRouter} from "react-router-dom"
import {withUser} from './context/UserProvider.js'
import AuthContainer from './components/auth/AuthContainer.js'
import Home from './components/Home.js'
import ProtectedRoute from './shared/ProtectedRoute.js';
import NotFound from './components/NotFound.js'
import IndividualGame from './components/IndividualGame.js'
import "./styling/style.css"
// import './styling/user.css'
// import './styling/home.css'
// import './styling/game-card.css'
// import './styling/individual-game.css'

// Auth
    // Form for login and signup
// UserProvider - context

// Dependencies
    // axios, react-router-dom, prop-types

const App = (props) => {
    const {user, token, logout} = props
    // document.title = props.location.pathname.slice(1)[0].toUpperCase() + props.location.pathname.slice(2)
    
    return (
        <div>
            {/* {token && <button onClick={props.logout} style={{backgroundColor: 'lightGreen', borderRadius: 10}}>Logout</button>}
            {!token && <button onClick={() => props.history.push("/login")}>login</button>} */}
            <Switch>
                <Route exact path="/" render={() => token ? <Redirect to="/browse"/> : <Redirect to="/login"/>}/>
                <Route 
                    path="/login" 
                    render={rProps => token ? <Redirect to="/browse"/> : <AuthContainer {...rProps}/>}/>
                <ProtectedRoute 
                    token={token}
                    path="/browse"
                    redirectTo="/login"
                    component={Home}
                    username={user.username}
                    logout={props.logout}
                />
                <Route path='/:_id' component={IndividualGame}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    )
}


export default withUser(withRouter(App))