import React from 'react'

const AuthForm = props => {
    const {handleChange, handleSubmit, username, password, payment, btnText} = props

    return(
        <form onSubmit={handleSubmit}>
            <input 
                style={{backgroundColor: "white"}}
                type="text" 
                name="username" 
                onChange={handleChange} 
                value={username} 
                placeholder="Username" 
                required/>
            <input 
                style={{backgroundColor: "white"}}
                type="password" 
                name="password" 
                onChange={handleChange} 
                value={password} 
                placeholder="Password" 
                required/>
            {/* <input 
                style={{backgroundColor: "white"}}
                type="text" 
                name="payment" 
                onChange={handleChange} 
                value={payment} 
                placeholder="Monies" 
                required/> */}
            <button style={{backgroundColor:"red"}}>{btnText}</button>
        </form>
    )
}

export default AuthForm