import React, {Component} from 'react'
import AuthForm from './AuthForm.js'
import {withUser} from '../../context/UserProvider.js'
// import LoginForm from './LoginForm.js'


class AuthContainer extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            payment: "",
            authToggle: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleSubmit for our signup form
    handleSignUp = e => {
        e.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password,
            payment: this.state.payment
        }
        this.props.signup(credentials)
    }
    
    handleLogin = e => {
        e.preventDefault()
        const credentials = {
            username: this.state.username,
            password: this.state.password,
            payment: this.state.payment
        }
        this.props.login(credentials)
    }

    toggler = () => {
        this.setState(prevState => ({
            authToggle: !prevState.authToggle
        }))
    }

    render(){
        return(
            <div className="user-auth">
                {this.state.authToggle ?
                    <>
                        <h3>Sign Up</h3>
                        <AuthForm 
                            className="signup"
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSignUp}
                            username={this.username}
                            password={this.password}
                            payment={this.payment}
                            btnText="Sign Up"
                        />
                        <p style={{color: 'firebrick'}}>{this.props.errMsg}</p>
                        <button onClick={this.toggler}>Already a member?</button>
                    </>
                    :
                    <>
                        <h3>Login</h3>
                        <AuthForm 
                            className="login"
                            handleChange={this.handleChange}
                            handleSubmit={this.handleLogin}
                            username={this.username}
                            password={this.password}
                            btnText="Login"
                        />
                        <p style={{color: 'firebrick'}}>{this.props.errMsg}</p>
                        <button onClick={this.toggler} style={{backgroundColor: "white"}}>Not a member?</button>
                    </>
                }
            </div>
        )
    }

}

export default withUser(AuthContainer)