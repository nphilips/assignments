import React, {Component} from 'react'
import axios from 'axios'

const BeerContext = React.createContext()

class BeerProvider extends Component {
    constructor(){
        super()
        this.state = {
            beer: []
        }
        this.url = "https://api.punkapi.com/v2/beers"
    }

    getBeer = () => {
        axios.get(this.url).then(response => {
            this.setState({
                beer: response.data
            })
        }).catch(error => console.log(error))
    }

    addBeer = (inputs) => {
        const { title, description, imgUrl } = inputs

        const newBeer = { title, description, imgUrl }

        axios.post(this.url, newBeer).then(response => {
            // update state
            this.setState(prevState => {
                return{
                    beer: [response.data, ...prevState.Beer],
                    // title: '',
                    // description: '',
                    // imgUrl: '',
                }
            })
        }).catch(error => console.log(error))
    }

    handleDelete = (_id) => {
        axios.delete(`${this.url}/${_id}`).then(response => {
            this.setState(prevState => {
                return{
                    beer: prevState.beer.filter(beer => beer._id !== _id)
                }
            })
        }).catch(error => console.log(error))
    }

    handleEdit = (_id, updates) => {
        axios.put(`${this.url}/${_id}`, updates)
        .then(response => {
            const updatedBeer = response.data
            this.setState(prevState => {
                return {
                    beer: prevState.beer.map(beer => beer._id === _id ? updatedBeer : beer)
                }
            })
        }).catch(error => console.log(error))
    }

    render(){
        return(
            <BeerContext.Provider 
                value={{
                    beer: this.state.beer,
                    getBeer: this.getBeer,
                    addBeer: this.addBeer,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit,
                }}>
                {this.props.children}
            </BeerContext.Provider>
        )
    }
}

export const withBeer = C => props => (
    <BeerContext.Consumer>
        {value => <C {...props} {...value}/>}
    </BeerContext.Consumer>
)

export default BeerProvider