import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
    const token = localStorage.token
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.token || "",
            errMsg: ""
        }
    }

    signup = credentials => {
        axios.post("/auth/signup", credentials).then(res => {
            const {user, token} = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({user, token, errMsg: ""})
        })
        .catch(err => this.handleErr(err.response.data.errMsg))
    }

    login = credentials => {
        axios.post("/auth/login", credentials).then(res => {
            const {user, token} = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({user, token, errMsg: ""})
            //, this.props.history.push("/home")
        })
        .catch(err => this.handleErr(err.response.data.errMsg))
    }

    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({user: {}, token: ""})
    }

    handleErr = errMsg => this.setState({errMsg})

    getProtectedStuff = () => {
        userAxios.get("/api/user/somethingspecial").then(res => {

        })
    }

    render() {
        return (
            <UserContext.Provider 
            value = {{
                ...this.state,
                signup: this.signup,
                login: this.login,
                logout: this.logout
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default withRouter(UserProvider)

export const withUser = C => props => (
    <UserContext.Consumer>
        {value => <C {...props} {...value}/>}
    </UserContext.Consumer>
)