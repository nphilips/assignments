import React from 'react'

class App extends React.Component {
    constructor (){
        super()
        this.state ={
            favMovie: "",
            favActor: "",
            isRotten: false,
            gender: "",
            favCity: "",
            actorCollection: []
        }
    }

    handleChange = e => {
        const value= e.target.type === "checkbox" 
        ? e.target.checked 
        : e.target.value
        this.setState({
            [e.target.name]: value
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        const actorObj = {
            favMovie: this.state.favMovie,
            favActor: this.state.favActor,
            isRotten: this.state.isRotten,
            gender: this.state.gender,
            favCity: this.state.favCity
        }
        this.setState(prevState => {
            return{
                favMovie: "",
            favActor: "",
            isRotten: false,
            gender: "",
            favCity: "",
            actorCollection: [...prevState.actorCollection, actorObj]
            }
        })
    }

    render(){
        return(
            <div>
                <form>
                    <input 
                        type="text" 
                        name="favMovie" 
                        value={this.state.favMovie} 
                        onChange={this.handleChange} 
                        placeholder="Faveorite Movie"
                    />
                    <input 
                        type="text" 
                        name="favActor" 
                        value={this.state.favActor} 
                        onChange={this.handleChange} 
                        placeholder="Faveorite Actor"
                    />
                    Is it Rotten?
                    <input 
                        type="checkbox" 
                        name="isRotten" 
                        checked={this.state.isRotten} 
                        onChange={this.handleChange}
                    />
                    Male
                    <input 
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={this.handleChange}
                    />
                    Female
                    <input 
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={this.handleChange}
                    />
                    Other
                    <input 
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={this.handleChange}
                    />
                    <select name="favCity" onChange={this.handleChange} placeholder="Choose One">
                        <option>Choose Your Faveorite City</option>
                        <option value="Paris">Paris</option>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="Cape Town">Cape Town</option>
                        <option value="Reykajavik">Reykajavik</option>
                    </select>
                    <button>Submit</button>
                </form>
                <div>
                    {this.state.actorCollection.map((item, i) =>{
                        return(
                            <div>
                                <h1 key={i}>Movie: {item.favMovie}</h1>
                                <h3 key={i}>Faveorite Actor: {item.faveActor}</h3>
                                <p key={i}>Is Rotten? {item.isRotten.toString()}</p>
                                <p key={i}>Fav City: {item.favCity}</p>
                                <p key={i}>Gender: {item.gender}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App