import React from 'react'
import MyNavLink from './MyNavLink.js'
import { data } from './navlinks.json'

const Navbar = () => {
    return (
        <div className="nav">
            { data.map(link => <MyNavLink {...link} key={Math.random()}/>) }
        </div>
    )
}

export default Navbar