import React from 'react'


const SuperHero = (props) => {
    const styleObj = {
        backgroundImage: `url(${props.imgUrl})`
    }

    return(
        <div 
            style={styleObj} 
            className='superHero-div' 
            onCLick={() => props.sayCatchPhrase(props.catchPhrase)}
        >
            <h1>{props.name}</h1>
        </div>
    )
}

export default SuperHero