import React from 'react'
import Game from './Game.js'

const GameList = (props) => {
    const mappedGames = props.games.map(game => 
                                <Game 
                                    {...game} 
                                    handleDelete={props.handleDelete} 
                                    handleEdit={props.handleEdit}
                                    key={game._id}
                                />)

    return (
        <div>
            { mappedGames }
        </div>
    )
}

export default GameList