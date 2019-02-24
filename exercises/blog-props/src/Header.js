import React from 'react'
import NavBar from './NavBar.js'

const Header = () => {
    return(
        <div className='header'>
            <div className='headerTitle'>
                <h1>Start Bootstrap</h1>
            </div>
            <div>
                <NavBar />
            </div>
        </div>
    )
}

export default Header