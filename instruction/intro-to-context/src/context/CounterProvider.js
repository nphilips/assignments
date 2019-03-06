import React, {Component} from 'react'

const CounterContext = React.createContext

class CounterProvider extends Component {
    constructor(){
        super()
        this.state={
            counter: 0,
        }
    }

    increment = () => {
        this.setState(prevState => {
            return{
                counter: prevState.counter + 1
            }
        })
    }

    render(){
        return(
            <div>
                <CounterContext.Provider 
                    value={{
                        counter: this.state.counter,
                        increment: this.increment
                    }}>
                    {this.props.children}
                </CounterContext.Provider>
            </div>
        )
    }
}

export const withCounter = (C) => props => (
    <CounterContext.Consumer>
        {value => <C {...props} {...value}/>}
    </CounterContext.Consumer>
)

export default CounterProvider