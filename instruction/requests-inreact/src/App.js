import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state ={
            rickAndMortyCharacters: []
        }
    }

    componentDidMount(){
        axios.get("https://rickandmortyapi.com/api/character").then(response => {
            console.log(response.data.results)
            this.setState({
                rickAndMortyCharacters: response.data.results
            })
        }).catch(error => console.log(error))
    }

    render(){
        const mappedCharacters = this.state.rickAndMortyCharacters.map((item) => {
            return(
                <div key={item.id} style={{backgroundImage: `url(${item.image})`, height: 200, backgroundSize: 'cover'}}>
                    <h1>{item.name}</h1>
                </div>
            )
        })
        return(
            <div>
                {mappedCharacters}
            </div>
        )
    }
}

export default App