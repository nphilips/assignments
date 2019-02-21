import React from 'react'
import Friend from './Friend.js'

//name
//age
//color
const Person = (props) => {

    const mappedFriends = props.friends.map((friend, i) => <Friend name={friend} key={i}/>)


    console.log(props);
    return(
        <div style={{backgroundColor: props.favColor}}>
            <h1>Hi, my name is {props.name}, and I am {props.age} years old.</h1>
            <h3>These are {props.name}'s friends:{mappedFriends}</h3>
            <ul>
                
            </ul>
        </div>
    )
}

export default Person