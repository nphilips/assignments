import React, {Component} from 'react'
import SuperHero from './Superhero.js'
import data from './superHeroes.json'


class App extends Component {
    constructor() {
        super()
        this.state ={
        }
    }
    
    sayCatchPhrase = (catchPhrase) => {
        alert(catchPhrase)
    }

    render(){
        
        const mappedSuperHeroes = data.superHeroes
                    .map((hero, i) => 
                        <SuperHero 
                            name={hero.name} 
                            imgUrl={hero.imgUrl} 
                            catchPhrase={hero.catchPhrase} 
                            sayCatchPhrase={this.sayCatchPhrase}
                            key={i}
                            />)

        return(
            <div>
                {mappedSuperHeroes}
            </div>
        )
    }
}

export default App