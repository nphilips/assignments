import React from 'react'
import CounterDisplay from './CounterDisplay.js'
import CounterControls from './CounterControls.js'

// Class Components vs Functional Components
    // Stateful         Stateless
    // Logic            Display
// State
// Event listeners


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            counter:0
        }
    }

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }
    handleDecrement = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            }
        })
    }
    handleMult = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter * 2
            }
        })
    }
    handleDiv = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter / 2
            }
        })
    }

    // Doing Words (methods)
    render(){
        return(
            <div>
                <CounterDisplay counter={this.state.counter}/>
                <CounterControls 
                handleIncrement={this.handleIncrement} 
                handleDecrement={this.handleDecrement}
                handleMult={this.handleMult}
                handleDiv={this.handleDiv}
                />
            </div>
        )
    }
}

// const App = () => {
//     return (
//         <div>
//             <h1>hello world</h1>
//         </div>
//     )
// }

export default App