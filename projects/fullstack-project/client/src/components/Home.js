import React from 'react'
import GameList from './GameList.js'

const Home = (props) => {
    return(
        <div className="home-container">
            {/* <button onClick={props.logout}>Logout</button> */}
            <div className="user-icon" >
                {props.username}
                
                <GameList/>
            </div>
        </div>
    )
}

export default Home