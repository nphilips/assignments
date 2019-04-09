// 


import React, { Component } from 'react'
import axios from 'axios'
const gameAxios = axios.create();

gameAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const GameContext = React.createContext()

class GameProvider extends Component {
    constructor(){
        super()
        this.state = {
            games: []
        }
        // this.url = "mongodb://localhost:27017/gameguru/games"
    }

    getGames = () => {
        gameAxios.get("/gameguru/games").then(response => {
            console.log(response.data)
            this.setState({
                games: response.data
            })
        }).catch(error => console.log(error))
    }

    
    render(){
        return (
            <GameContext.Provider 
                value={{
                    games: this.state.games,
                    getGames: this.getGames
                }}>
                { this.props.children }
            </GameContext.Provider>
        )
    }
}

export const withGames = C => props => (
    <GameContext.Consumer>
        { value => <C {...props} {...value}/> }
    </GameContext.Consumer>
)

export default GameProvider