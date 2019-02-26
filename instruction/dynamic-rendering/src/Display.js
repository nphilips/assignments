import React from 'react'

// A funciton that returns JSX

const Display = (props) => {
    if(props.greeting === "Hello"){
        return <h1>The Greeting is Hello!</h1>
    } else if(props.greeting === "Goodbye"){
        return <h1>The Greeting is Goodbye!</h1>
    }
}

export default Display