import React, { Component } from 'react'
import { withGames } from '../context/GameProvider'

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


    render(){
        const { title, summary, imgUrl, genre, votes} = this.props

        return (
            <div>
                <div className="game-div">
                    {/* <h1>{title}</h1> */}
                    <div className='game-pic-and-summary'>
                        <div className='game-pic' 
                        style={{
                            backgroundImage: `url(${imgUrl})`, 
                            backgroundPosition: 'center', 
                            backgroundSize: 'contain', 
                            height: "35vh",
                            width: "auto",
                            backgroundRepeat: 'no-repeat'
                            }}
                            >
                        </div>
                        {/* <h3 className='summary'>{summary}</h3> */}
                    </div>
                        {/* <p>votes: {votes}</p>
                        <p>genre: {genre}</p> */}
                </div>
            </div>
        )
    }
}


export default withGames(Game)