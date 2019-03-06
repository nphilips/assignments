import React, {Component} from 'react'

const CountContext = React.createContext()

class CountProvider extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increment=() => this.setState(prevState => ({ count: prevState.count + 1}))
    decrement=() => this.setState(prevState => ({ count: prevState.count - 1}))

    render(){
        return(
            <CountContext.Provider 
                value={{
                    count: this.state.count,
                    increment: this.increment,
                    decrement: this.decrement
                }}>
                {this.props.children}
            </CountContext.Provider>
        )
    }
}

export const withCount = C => props => (
    <CountContext.Consumer>
        {value => <C {...props} {...value}/>}
    </CountContext.Consumer>
)

export default CountProvider