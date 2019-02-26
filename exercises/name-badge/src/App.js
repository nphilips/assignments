import React from 'react'

class App extends React.Component {
    constructor (){
        super()
        this.state ={
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phoneNumber: "",
            favFood: "",
            description: ""
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const badgeInfoObj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phoneNumber: this.state.phoneNumber,
            favFood: this.state.favFood,
            description: this.state.description,
        }
        this.setState(prevState => {
            return{
                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phoneNumber: "",
                favFood: "",
                description: "",
                badgeInformation: [...prevState.badgeInformation, badgeInfoObj]
            }
        })
    }

    render(){
        return(
            <div>
                <form>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.handleChange} 
                        placeholder="First Name"
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        value={this.state.lastName} 
                        onChange={this.handleChange} 
                        placeholder="Last Name"
                    />
                    <input 
                        type="text" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        placeholder="Email"
                    />
                    <input 
                        type="text" 
                        name="placeOfBirth" 
                        value={this.state.placeOfBirth} 
                        onChange={this.handleChange} 
                        placeholder="Place of Birth"
                    />
                    <input 
                        type="text" 
                        name="phoneNumber" 
                        value={this.state.phoneNumber} 
                        onChange={this.handleChange} 
                        placeholder="Phone Number"
                    />
                    <input 
                        type="text" 
                        name="favFood" 
                        value={this.state.favFood} 
                        onChange={this.handleChange} 
                        placeholder="Faveorite Food"
                    />
                    <input 
                        type="text" 
                        name="description" 
                        value={this.state.description} 
                        onChange={this.handleChange} 
                        placeholder="Tell Us About Yourself!"
                    />
                    
                    <button>Submit</button>
                </form>
                <div>
                    {this.state.badgeInformatin.map((item, i) =>{
                        return(
                            <div>
                                <h1 key={i}>Name: {item.firstName} {item.lastName}</h1>
                                <h3 key={i}>Email: {item.email}</h3>
                                <h3 key={i}>Place of Birth: {item.placeOfBirth}</h3>
                                <p key={i}>Phone Number: {item.phoneNumber}</p>
                                <p key={i}>Faveorite Food: {item.favFood}</p>
                                <p key={i}>Description: {item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App