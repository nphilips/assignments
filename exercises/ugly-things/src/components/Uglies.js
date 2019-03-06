import React, {Component} from 'react'
import AddUgliesForm from './AddUgliesForm.js'

class Uglies extends Component{

    constructor(props){
        super(props)
        this.state = {
            isToggled: false,
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl,
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl,
        }
        this.props.handleEdit(this.props._id, updates)
        this.toggler()
    }

    render(){
        const { title, description, imgUrl, completed, handleDelete, _id } = this.props

        return(
            <div>
                { !this.state.isToggled ?
                <div style={{
                        backgroundImage: `url(${imgUrl})`, 
                        border: '1px solid black', 
                        margin: 5, 
                        backgroundPosition: 'center', 
                        backgroundSize: 'cover', 
                        color: 'lightblue', 
                        height: 200}}>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <input type="checkbox" defaultChecked={completed}/>
                    <button onClick={() => handleDelete(_id)} >DELETE</button>
                    <button onClick={this.toggler}>Edit</button>
                </div>
                :
                <div 
                    className='edit-uglies-div' 
                    style={{
                        height: 200, 
                        margin: 5, 
                        display: 'flex', 
                        fledDireciton: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'space-evenly', 
                    }}>
                    <AddUgliesForm 
                        {...this.state}
                        btnText="Submit Edit"
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleEdit={this.handleEdit}
                    />
                    <button onClick={this.toggler}>Close</button>
                </div>
                }
            </div>
        )
    }
}

export default Uglies