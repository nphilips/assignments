import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class MyNavLink extends Component {
    constructor(){
        super()
        this.state = {
            extendedMenuToggle: false
        }
    }

    toggleMenu = e => {

        this.setState(prevState => ({ extendedMenuToggle: !prevState.extendedMenuToggle }))
    }

    render(){
        return (
            <div className="nav-item">
                <Link to="/pathname" onClick={this.toggleMenu}>{this.props.title}</Link>
                {this.state.extendedMenuToggle &&  this.props.items.map(item => {
                    return ( <Link className="sub-item" to="pathname">- {item.title}</Link>)
                })}
            </div>
        )
    }
}

export default MyNavLink