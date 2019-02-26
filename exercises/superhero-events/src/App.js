import React from 'react'
import data from './superHeroes.json'
import SuperHeroes from './SuperHeroes.js'


class App extends React.Component {
    
    render(){
        const mappedSuperHeroes = data.superHeroes.map((hero,i) => 
            <div key={i} style={{
                backgroundImage: `url(${hero.imgUrl})`, 
                backgroundSize: 'cover', 
                height: 700,
                paddingLeft: 25,
            }}>

                <h1 style={{color: 'white'}}>Name: {hero.name}</h1>
                <article onClick={window.alert(
                    <p style={{
                        color: 'white',
                        shadowColor: 'black',
                        }}> {hero.line2}</p>,
                    <p style={{
                        color: 'white', 
                        textShadow: '50 50 50 #000000'
                        }}> {hero.line1}</p>,
                    <p style={{
                        color: 'white', 
                        textShadow: '50 50 50 #000000'
                        }}> {hero.line3}</p>,
                    <p style={{
                        color: 'white', 
                        textShadow: '50 50 50 black'
                        }}> {hero.line4}</p>,
                    <p style={{
                        color: 'white', 
                        textShadow: '50 50 50 black'
                        }}> {hero.line5}</p>,
                    <p style={{
                        color: 'white', 
                        textShadow: '50 50 50 black'
                        }}> {hero.line6}</p>,
                    <p style={{
                        color: 'white', 
                        textShadow: '50 50 50 black'
                        }}> {hero.line7}</p>,
                    <p style={{
                        color: 'white', 
                        textShadow: '50 50 50 black'
                        }}> {hero.line8}</p>
                )}>
                </article>
            </div>
        )

        return (
            <div className='superHero-container' style={{backgroundColor: 'black'}}>
                {mappedSuperHeroes}
            </div>
        )
    }
}

export default App