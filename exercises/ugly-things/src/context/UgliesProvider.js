import React, {Component} from 'react'
import axios from 'axios'

const UgliesContext = React.createContext()

class UgliesProvider extends Component {
    constructor(){
        super()
        this.state = {
            uglies: []
        }
        this.url = "https://api.vschool.io/nickp-ugly-things/todo/"
    }

    getUglies = () => {
        axios.get(this.url).then(response => {
            this.setState({
                uglies: response.data
            })
        }).catch(error => console.log(error))
    }

    addUglies = (inputs) => {
        const { title, description, imgUrl } = inputs

        const newUglies = { title, description, imgUrl }

        axios.post(this.url, newUglies).then(response => {
            // update state
            this.setState(prevState => {
                return{
                    uglies: [response.data, ...prevState.uglies],
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
                    uglies: prevState.uglies.filter(uglies => uglies._id !== _id)
                }
            })
        }).catch(error => console.log(error))
    }

    handleEdit = (_id, updates) => {
        axios.put(`${this.url}/${_id}`, updates)
        .then(response => {
            const updatedUglies = response.data
            this.setState(prevState => {
                return {
                    uglies: prevState.uglies.map(uglies => uglies._id === _id ? updatedUglies : uglies)
                }
            })
        }).catch(error => console.log(error))
    }

    render(){
        return(
            <UgliesContext.Provider 
                value={{
                    uglies: this.state.uglies,
                    getUglies: this.getUglies,
                    addUglies: this.addUglies,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit,
                }}>
                {this.props.children}
            </UgliesContext.Provider>
        )
    }
}

export const withUglies = C => props => (
    <UgliesContext.Consumer>
        {value => <C {...props} {...value}/>}
    </UgliesContext.Consumer>
)

export default UgliesProvider