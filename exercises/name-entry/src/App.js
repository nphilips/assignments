import React, {Component} from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            nameInput: "",
            names: []
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        this.setState(prevState => {
            return {
                names: [...prevState.names, this.state.nameInput],
                nameInput: ""
            }
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.nameInput}</h1>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='nameInput' value={this.state.nameInput} onChange={this.handleChange} placeholder='Name'/>
                    <button>Submit</button>
                </form>

                <ol>
                    {this.state.names.map((name,i) => <li><h1 key={i}>{name}</h1></li>)}
                </ol>

            </div>
        )
    }
}

export default App