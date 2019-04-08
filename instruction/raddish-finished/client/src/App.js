import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { withUser } from './context/UserProvider.js'
import AuthContainer from './components/auth/AuthContainer.js'
import ProtectedRoute from './shared/ProtectedRoute.js'
import Home from './components/Home.js'
import NotFound from './components/NotFound.js'

// Auth 
    // Form for login and signup
// UserProvider - context

// dependencies
    // axios, react-router-dom, prop-types    

const App = (props) => {
    const { user, token, logout } = props   
    document.title = props.location.pathname === "/" ? "" : props.location.pathname.slice(1)[0].toUpperCase() + props.location.pathname.slice(2)
    return (
        <div>
            <Switch>
                <Route exact path="/" render={() => token ? <Redirect to="/home"/> : <Redirect to="/login"/> }/>
                <Route 
                    path="/login" 
                    render={routerProps => token ? <Redirect to="/home"/> : <AuthContainer {...routerProps}/>}/>
                <ProtectedRoute 
                    token={token}
                    path="/home"
                    redirectTo="/login"
                    component={Home}
                    username={user.username}
                    logout={logout}
                />   
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    )
}

export default withRouter(withUser(App))