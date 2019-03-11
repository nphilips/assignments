import React, { Component } from 'react'
import { withBeers } from '../context/BeerProvider.js'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            nameInput: '',
            abvInput: '',

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleNameSubmit = e => {
        e.preventDefault()
        this.props.getBeersByName(this.state.nameInput)
        this.setState({
            nameInput: "",
            abvInput: '',
        })
        
    }
    handleABVSubmit = e => {
        e.preventDefault()
        this.props.getBeersByABV(this.state.abvInput)
        this.setState({
            nameInput: "",
            abvInput: '',
        })
        
    }

    render(){
        return (
            <div className="app-container">
                <h1>Match Your Malts</h1>
                <h6>(Beer list)</h6>

                <form className='beer-form' onSubmit={this.handleNameSubmit} style={{marginTop:55}}>
                    <input type="text" name="nameInput" value={this.state.nameInput} onChange={this.handleChange} placeholder='By Name:'/>
                    
                    <button>Submit</button>
                </form>

                <h1 className='beer-form'>OR</h1>

                <form className='beer-form' onSubmit={this.handleABVSubmit}>
                    <input type="number" name="abvInput" value={this.state.abvInput} onChange={this.handleChange} placeholder='By Abv:'/>

                    <button>Submit</button>
                </form>

                <div className="listed-beers">
                    { this.props.beers.map(beer => 
                        <div className="beer-div">
                            <h1 className="beer-name">{beer.tagline}</h1> 
                            <div className='beer-pic-and-description'>
                                <div className='beer-pic' style={{
                                    backgroundImage: `url(${beer.image_url})`, 
                                    backgroundPosition: 'center', 
                                    backgroundSize: 'contain', 
                                    height: 200, 
                                    width: 600, 
                                    backgroundRepeat: 'no-repeat', 
                                    }}>
                                </div>
                                <p className='description'>{beer.description}</p>
                            </div>
                            <p>ABV: {beer.abv}%</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default withBeers(Home)