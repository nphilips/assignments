import React from 'react'

const Home = (props) => {
    return(
        <div>
            <button onClick={props.logout}>Logout</button>
            Welcom Home {props.username}
        </div>
    )
}

export default Home