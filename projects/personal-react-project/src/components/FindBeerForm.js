import React, { Component } from 'react';

class FindBeerForm extends Component {
    constructor(){
        super()
        this.state = {
            tagline: '',
            description: '',
            image_url: '',
            abv: '',
        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        this.props.findBeer(this.state)
        
        this.setState({
            tagline: '',
            description: '',
            image_url: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="tagline" 
                    value={this.state.tagline} 
                    onChange={this.handleChange}
                    placeholder="Name of Beer"/>
                    <button>Find Beer By Name</button>
                <input 
                    type="number" 
                    name="abv" 
                    value={this.state.abv} 
                    onChange={this.handleChange}
                    placeholder="ABV: "/>
                    <button>Find Beer By ABV</button>
            </form>
        )
    }
}

export default FindBeerForm;