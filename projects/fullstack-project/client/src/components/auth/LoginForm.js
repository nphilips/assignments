import React, {Component} from 'react'
import AuthForm from './AuthForm.js'
import {withUser} from '../../context/UserProvider.js'


class LoginForm extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            payment: "",
            authToggle: false
        }
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
            </div>
        )
    }

}

export default withUser(LoginForm)