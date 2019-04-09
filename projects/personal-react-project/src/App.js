import React, { Component } from 'react'
import BeerList from './components/BeerList.js'
import FindBeerForm from './components/FindBeerForm.js'
import { withBeers } from './context/BeerProvider.js'


class App extends Component {
    render(){
        return (
            <div className="app-container">
                <h1>Match Your Malts</h1>
                <h6>(Beer list)</h6>
                <FindBeerForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} 
                    tagline={this.state.tagline}
                    description={this.state.description}
                    image_url={this.state.image_url}
                    btnText="Find Beer"/>
                <BeerList 
                    beers={this.props.beers}
                    // handleDelete={this.props.handleDelete}
                    // handleEdit={this.props.handleEdit}
                    />
            </div>
        )
    }
}

export default withBeers(App)