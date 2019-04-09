import React from 'react';
import { withGame } from '../context/GameProvider'
import { Link } from "react-router-dom";
import {
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';


const IndividualGame = (props) => {
    console.log(props.game)
    let game = props.game.find(
        game => game._id === props.match.params._id
    );
    // console.log(game)
    return (
        <div>
                
            {item ?
            <div>
            <Link to="/">
                    Return to Results
            </Link>
                <div className='individual-game'>
                    <div>
                        <CardImg style={{ width: '100%', height: 'auto' }} src={item.imgUrl} alt={item.title} />
                        <CardBody style={{ background: 'purple', width: '100%', height: 'auto' }}>
                            <CardTitle>{item.title}</CardTitle>
                            <CardSubtitle>{item.summary}</CardSubtitle>
                            <CardText>votes: {item.votes}</CardText>
                            <CardText>genre: {item.genre}</CardText>
                            <Button onClick={() => props.addToCart(item._id)}> Add to cart </Button>
                        </CardBody>
                    </div>
                    </div>
                    </div>
                    :
                    <h1>loading</h1>
                }
                </div>

            
            
    );
};

export default withGame(IndividualGame);