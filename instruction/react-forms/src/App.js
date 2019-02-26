import React, {Component} from 'react'

class App extends Component {
    constructor () {
        super()
        this.state= {
            nameInput: "",
            ageInput: "",
            names: []
        }
    }

    handleChange = (e) => {
        const{ name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // alert(`Hi, I am ${this.state.nameInput}, and I am ${this.state.ageInput} years old!`)

        this.setState(prevState => {
            return {
                names: [...prevState.names, this.state.nameInput],
                nameInput: "", // clears the input box for name
                ageInput: "" // clears the input box for age
            }
        })
    }

    render(){
        
        return(
            <div>
                <h1>{this.state.nameInput}</h1> // makes a type along
                <h1>{this.state.ageInput}</h1> // makes a type along

                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='nameInput' value={this.state.nameInput} onChange={this.handleChange} placeholder='name'/>
                    <input type="text" name='ageInput' value={this.state.ageInput} onChange={this.handleChange} placeholder='age'/>
                    <button>Submit</button>
                </form>

                <div>
                    {this.state.names.map((name,i) => <h1 key={i}>{name}</h1>)}
                </div>
            </div>
        )
    }
}

export default App