import React, {Component} from 'react'
import UgliesList from './components/UgliesList.js'
import AddUgliesForm from './components/AddUgliesForm.js'
import {withUglies} from './context/UgliesProvider.js'
import './style.css'


class App extends Component{
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            imgUrl: '',
        }
    }

    componentDidMount(){
        this.props.getUglies()
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUglies(this.state)
        this.setState({
            title: '',
            description: '',
            imgUrl: '',
        })
    }

    render(){
        return(
            <div>
                <AddUgliesForm 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    title={this.state.title} 
                    description={this.state.description} 
                    imgUrl={this.state.imgUrl}
                    btnText= "Add Uglies"
                />
                <UgliesList 
                    uglies={this.props.uglies}
                    handleDelete={this.props.handleDelete}
                    handleEdit={this.props.handleEdit}
                />
            </div>
        )
    }
}

export default withUglies(App)