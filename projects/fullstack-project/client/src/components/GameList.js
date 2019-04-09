import React from 'react'
import Game from './Game.js'

const GameList = (props) => {
    const mappedGames = props.games.map(game => 
                                <Game 
                                    {...game} 
                                    key={game._id}
                                />)
    console.log(props)
    return (
        <div>
            { mappedGames }
        </div>
    )
}

export default GameList