import React from 'react'
import data from './superHeroes.json'

class App extends React.Componenet {
    // constructor(){
    //     super()
    //     this.state={

    //     }
    // }
    
    render(){
        
        const mappedSuperHeroes= data.superHeroes.map((hero,i)=>
            <div style={{
                backgroundImage: `url(${hero.imgUrl})`, 
                backgroundSize: 'cover', 
                height: 500,
                }}>
                <h1 style={{color: 'white'}}>Name: {hero.name}</h1>
                <p style={{color: 'white'}}>CatchPhrase: {hero.catchPhrase}</p>
            </div>)

        return(
            <div>
                {mappedSuperHeroes}
            </div>
        )
    }
}

export default App