import React from 'react'
import Game from './Game.js'
import {Link} from 'react-router-dom'

const GameList = (props) => {
    const mappedGames = props.games.map(game => 
        <Link to={game._id}>
            <Game 
                {...game} 
                key={game._id}
            />
        </Link>)

    // console.log(props)

    return (
        <div>
            { mappedGames }
        </div>
    )
}

export default GameList