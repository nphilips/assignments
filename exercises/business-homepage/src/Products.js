import React from 'react'

function Products(){
    return(
        <div>
            <div className='splitPic'>
                <div className='picOne'></div>
                <div className='picTwo'></div>
            </div>

            <div>
                <article className='menuTitle'>
                    <h1>Fresh Groud Coffee</h1>
                </article>
                <section className='menu'>
                    <div className='drinkName'>
                        <p>Americano</p>
                        <p>Cappuccino</p>
                        <p>Mocha</p>
                    </div>
                    <div className="price">
                        <p>$10</p>
                        <p>$11</p>
                        <p>$12</p>
                    </div>
                </section>
                <article className='menuTitle'>
                    <h1>Craft Beers</h1>
                </article>
                <section className='menu'>
                    <div className='drinkName'>
                        <p>IPA</p>
                        <p>Stout</p>
                        <p>Fruity</p>
                    </div>
                    <div className="price">
                        <p>$10</p>
                        <p>$11</p>
                        <p>$12</p>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Products