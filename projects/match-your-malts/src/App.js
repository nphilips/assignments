import React, { Component } from 'react'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import FavDrinks from './components/FavDrinks.js'
import DrinkFinder from './components/DrinkFinder.js'
import Contact from './components/Contact.js'
import { Switch, Route, withRouter } from 'react-router-dom'
import { PageFade } from './transitions'
import './style.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            navToggle: false
        }
    }

    toggler = () => this.setState(prevState => ({ navToggle: !prevState.navToggle }))

    render(){
        const { navToggle } = this.state
        const { location } = this.props
        return (
            <div className="app-container">
                <Nav navToggle={navToggle} toggler={this.toggler}/>
                <div onClick={this.toggler} className={`overlay overlay-${navToggle ? "open" : "closed"}`}></div>
                <button className={`rotate rotate-${navToggle ? "open" : "closed"}`} onClick={this.toggler}>|||</button>

                <PageFade location={location}>
                    <Switch location={location}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/favDrinks" component={FavDrinks}/>
                        <Route path="/drinkFinder" component={DrinkFinder}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </PageFade>

            </div>
        )
    }
}


export default withRouter(App)