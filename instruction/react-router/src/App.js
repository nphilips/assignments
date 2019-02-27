import React from 'react'

import Header from './Header.js'
import Body from './Body.js'
import NewBody from './NewBody.js'
import Footer from './Footer.js'

import {Switch, Route} from 'react-router-dom'

const App = () => {
    return(
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Body}/>
                <Route path='/newbody' component={NewBody}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App