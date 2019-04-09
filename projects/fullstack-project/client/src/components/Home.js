import React, { Component } from 'react';
import GameList from './GameList.js'
import { withGames } from '../context/GameProvider'
// import {Carousel} from 'react-materialize'
import Navbar from './Nav';


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
                    <GameList games={this.props.games}/>
                </div>
            </div>
        )
    }
}

export default withGames(Home)