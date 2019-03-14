import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        axios.get("/todos").then(res => {
            console.log(res);
        })
    }


    render() {
        return (
            <div>
                {this.state.todos.map(todo => <h1>{todo.title}</h1>)}
            </div>
        );
    }
}

export default App;