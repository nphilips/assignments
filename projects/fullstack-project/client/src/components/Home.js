import React, { Component } from 'react';
import GameList from './GameList.js'
import { withGames } from '../context/GameProvider'
// import {Carousel} from 'react-materialize'
import Navbar from './Nav';
import {Link} from 'react-router-dom'


class Home extends Component {


    componentDidMount() {
        this.props.getGames()
    }

    render() {

    console.log(this.props.games[0])
    // const games = this.props.games[0].imgUrl
        return(
            <div className="home-container">
                <Navbar/>
                {/* <button onClick={this.props.logout}>Logout</button> */}
                <div className="user-icon" >
                    {this.props.username}
                </div>
                <div className="show-game">
                    {/* <Link to={game._id}> */}
                        <GameList games={this.props.games}/>
                    {/* </Link> */}
                </div>
            </div>
        )
    }
}

export default withGames(Home)