import React from 'react';
import { withGames } from '../context/GameProvider'
import {Link} from 'react-router-dom'
import {
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';


const IndividualGame = (props) => {
    console.log(props.games)
    let game = props.games.find(
        games => games._id === props.match.params._id
    );
    console.log(game)
    return (
        <div> 
            {game ?
            <div>
                <div className='individual-game'>
                    <div>
                        <CardImg style={{ width: '100%', height: 'auto' }} src={game.imgUrl} alt={game.title} />
                        <CardBody style={{ width: '100%', height: 'auto' }}>
                            <CardTitle>{game.title}</CardTitle>
                            <CardSubtitle>{game.summary}</CardSubtitle>
                            <CardText>votes: {game.votes}</CardText>
                            <CardText>genre: {game.genre}</CardText>
                        </CardBody>
                    </div>
                    <Link to="*">
                        <button style={{backgroundColor: "green", borderRadius: 10}}>
                            Play
                        </button>
                    </Link>
                </div>
            </div>
            :
            <h1>Error 404</h1>
                }
        </div>

            
            
    );
};

export default withGames(IndividualGame);