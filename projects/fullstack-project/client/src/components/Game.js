import React, { Component } from 'react'
// import AddBeerForm from './AddBeerForm.js'

class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            summary: props.summary,
            imgUrl: props.imgUrl,
            genre: props.genre,
            votes: props.votes,
        }
    }

    handleChange = e => {
        const { title, value } = e.target
        this.setState({ [title]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            title: this.state.title,
            summary: this.state.summary,
            imgUrl: this.state.imgUrl,
            votes: this.state.votes,
            genre: this.state.genre
        }
        this.props.handleEdit(this.props._id, updates)
        this.toggler()
    }


    render(){
        const { title, summary, imgUrl, genre, votes} = this.props

        return (
            <div>
                <div className="game-div">
                    <h1>{title}</h1>
                    <div className='game-pic-and-summary'>
                        <div className='game-pic' style={{
                            backgroundImage: `url(${imgUrl})`, 
                            backgroundPosition: 'center', 
                            backgroundSize: 'contain', 
                            height: 200, 
                            width: 600, 
                            backgroundRepeat: 'no-repeat', 
                            }}>
                        </div>
                        <h3 className='summary'>{summary}</h3>
                    </div>
                        <p>votes: {votes}</p>
                        <p>genre: {genre}</p>
                </div>
            </div>
        )
    }
}


export default Game