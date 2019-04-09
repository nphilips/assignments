import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize'
import { withUser } from '../context/UserProvider.js'


const Nav = (props) => {
    const { user, token } = props
    return (
        <div>
            <Navbar brand={<a />} alignLinks="right">
                <NavItem >
                    {token && <button onClick={props.logout} >Logout</button>}
                    {!token && <button onClick={() => props.history.push("/login")}>login</button>}
                </NavItem>
                <NavItem href="/browse">
                    Browse Games
                </NavItem>
                <NavItem href="components.html">
                    Components
                </NavItem>
            </Navbar>
        </div>
    );
};

export default withUser(Nav);