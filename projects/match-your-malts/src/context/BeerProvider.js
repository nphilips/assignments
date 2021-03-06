import React, { Component } from 'react'
import axios from 'axios'

const BeerContext = React.createContext()

class BeerProvider extends Component {
     constructor(){
        super()
        this.state = {
            beers: []
        }
     }

    getBeersByName = (nameInput) => {
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${nameInput}`)
            .then(res => {
                this.setState({
                    beers: res.data
                })
            })
        .catch(err => console.log(err))
    }
    getBeersByABV = (abvInput) => {
        axios.get(`https://api.punkapi.com/v2/beers?abv_gt=${abvInput}`)
            .then(res => {
                this.setState({
                    beers: res.data
                })
            })
        .catch(err => console.log(err))
    }

     render(){
         return (
             <BeerContext.Provider
                value={{
                    getBeersByName: this.getBeersByName,
                    getBeersByABV: this.getBeersByABV,
                    beers: this.state.beers
                }}>
                { this.props.children }
             </BeerContext.Provider>
         )
     }
}

export default BeerProvider


export const withBeers = C => props => (
    <BeerContext.Consumer>
        {value => <C {...props} {...value}/>}
    </BeerContext.Consumer>
)
