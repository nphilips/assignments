import React from 'react'
import Header from './Header.js'
import Nav from './Nav.js'
import About from './About.js'
import Footer from './Footer.js'
import Products from './Products.js'
import Contact from './Contact.js'

function App(){
    return(
        <div>
            <Header />
            <Nav />
            <Products />
            {/* <About /> */}
            <Contact />
            <Footer />
        </div>
    )
}

export default App