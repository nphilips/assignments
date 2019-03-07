import React, { Component } from 'react'
// import AddBeerForm from './AddBeerForm.js'

class Beer extends Component {
    constructor(props){
        super(props)
        this.state = {
            // isToggled: false,
            tagline: props.tagline,
            description: props.description,
            image_url: props.image_url,
            abv: props.abv,
        }
    }

    // toggler = () => {
    //     this.setState(prevState => ({
    //         isToggled: !prevState.isToggled
    //     }))
    // }

    handleChange = e => {
        const { tagline, value } = e.target
        this.setState({ [tagline]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            tagline: this.state.tagline,
            description: this.state.description,
            image_url: this.state.image_url,
            abv: this.state.abv
        }
        this.props.handleEdit(this.props._id, updates)
        this.toggler()
    }


    render(){
        const { tagline, description, image_url, handleDelete, abv, _id } = this.props

        return (
            <div>
                <div className="beer-div">
                    <h1>{tagline}</h1>
                    <div className='beer-pic-and-description'>
                        <div className='beer-pic' style={{
                            backgroundImage: `url(${image_url})`, 
                            backgroundPosition: 'center', 
                            backgroundSize: 'contain', 
                            height: 200, 
                            width: 300, 
                            backgroundRepeat: 'no-repeat', 
                            }}>
                        </div>
                        <h3>{description}</h3>
                    </div>
                        <p>ABV: {abv}%</p>
                    <button onClick={() => handleDelete(_id)}>Delete</button>
                </div>
                  
            </div>
        )
    }
}


export default Beer