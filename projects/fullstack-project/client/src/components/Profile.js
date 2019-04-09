import React, { Component } from 'react';
// import { withGames } from '../context/GameProvider'


class Profile extends Component {
    component(){
        super()
        this.state = {
            username: props.username,
            password: props.password
        }
    }
    render() {

    console.log(this.props)
        return(
            <div className="profile-container">
                {/* <button onClick={this.props.logout}>Logout</button> */}
                <div className="user-icon" >
                    {this.props.username}
                    {this.propls.password}
                </div>
            </div>
        )
    }
}

export default Profile