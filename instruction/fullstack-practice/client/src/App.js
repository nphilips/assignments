import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            wizards: [],
            firstName: '',
            lastName: '',
        }
    }

    componentDidMount(){
        axios.get('/wizards').then(response => {
            this.setState({
                wizards: response.data
            })
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newWizard ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        }
        axios.post('/wizards', newWizard).then(response => {
            this.setState(prevState => ({
                wizards: [...prevState.wizard, response.data],
                firstName: '',
                lastName: '',
            }))
        })
    }

    handleDelete = (_id) => {
        axios.delete(`/wizards/${_id}`).then(response => {
            alert(response.data)
            this.setState(prevState => {
                wizards: prevState.wizards.filter(wizard => wizard._id !== _id)
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text' 
                        name='firstName' 
                        value={this.state.firstName} 
                        onChange={this.handleChange}/>
                    <input 
                        type='text' 
                        name='lastName' 
                        value={this.state.lastName} 
                        onChange={this.handleChange}/>
                    <button>Add Wizard</button>
                </form>
                {this.state.wizards.map(wizard => <h1>{wizard.firstName} {wizard.lastName}</h1>)}
            </div>
        );
    }
}

export default App;