import React, {Component} from 'react'

// Higher Order Components - HOC's
// They are components that either
    // Take a component as an argument
    // or/and return a component

class Toggle extends Component {
    constructor(){
        super()
        this.state= {
            isToggled: false
        }
    }

    toggler = () => {
        this.setState(prevState => {
            return{
                isToggled: !prevState.isToggled
            }
        })
    }

    render(){
        const {component} = this.props
        const C = component

        return(
            <C isToggled={this.state.isToggled} toggler={this.toggler}/>
        )
    }
}

export const withToggler = C => props => <Toggle component={C} {...props}/>