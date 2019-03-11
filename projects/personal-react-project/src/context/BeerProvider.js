import React, { Component } from 'react'
import axios from 'axios'

const BeerContext = React.createContext()

class BeerProvider extends Component {
    constructor(){
        super()
        this.state = {
            beers: []
        }
        this.url = "https://api.punkapi.com/v2/beers?abv_gt=10"
    }

    getBeers = () => {
        axios.get(this.url).then(response => {
            this.setState({
                beers: response.data
            })
       })
       .catch(error => console.log(error))
    }

    // addBeer = (inputs) => {
    //     const { tagline, description, image_url, abv } = inputs
        
    //     const newBeer = { tagline, description, image_url, abv }

    //     axios.post(this.url, newBeer).then(response => {
    //         this.setState(prevState => {
    //             return {
    //                 beers: [response.data, ...prevState.beers]
    //             }
    //         })
            
    //     }).catch(error => console.log(error))
    // }

    // handleDelete = (_id) => {
    //     axios.delete(`${this.url}/${_id}`).then(response => {
    //         this.setState(prevState => {
    //             return {
                    
    //                 beers: prevState.beers.filter(beer => beer._id !== _id)
    //             }
    //         })    
    //     }).catch(error => console.log(error))
    // }

    // handleEdit = (_id, updates) => {
    //     axios.put(`${this.url}/${_id}`, updates)
    //         .then(response => {
                
    //             const updatedBeer = response.data
    //             this.setState(prevState => {
    //                 return {
                        
    //                     beers: prevState.beers.map(beer => beer._id === _id ? updatedBeer : beer)
    //                 }
    //             })
    //         })
    //         .catch(error => console.log(error))
    // }

    render(){
        return (
            <BeerContext.Provider 
                value={{
                    beers: this.state.beers,
                    getBeers: this.getBeers,
                    // addBeer: this.addBeer,
                    // handleDelete: this.handleDelete,
                    // handleEdit: this.handleEdit
                }}>
                { this.props.children }
            </BeerContext.Provider>
        )
    }
}

export const withBeers = C => props => (
    <BeerContext.Consumer>
        { value => <C {...props} {...value}/> }
    </BeerContext.Consumer>
)

export default BeerProvider