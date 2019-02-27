import React, {Component} from 'react'

// 1. Create a class Componenet
// 2. Use componentDidMount and ComponentWillUnmount to add a windo keydown event listener
// 3. Use styling changes on key events by setting state depending on the key pressed
        // hint: use the 'event listener' 

class App extends Component{
    constructor(){
        super()
        this.state = {
            bgColor: "blue",
            fontSize: 20,
        }
    }

    componentDidMount(){
        window.addEventListener("keydown", (e) => {
            if(e.which === 71){
                this.setState({
                    bgColor: "green",
                    fonstSize: 50
                })
            }
        })
    }

    componentWillUnmount(){
        window.removeEventListener("keydown")
    }

    
    render(){
        return(
            <div style={{backgroundColor: this.state.bgColor, fontSize: this.state.fontSize}}>
                    <h1 >Hello {this.state.username}</h1>
            </div>
        )
    }
}

export default App