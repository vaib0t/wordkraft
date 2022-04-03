/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/GameOverNotification.css';

/* Component import */

/* Asset imports */

function GameOverNotification({
    score,
    bestWord,
    resetGame
}){

    return(
        <div className='GameOverNotification'>
            <div className="notification">
                <div className="title">GAME OVER!</div>
                <div className="description">
                    Your final score was {score}, the best word you could have made was <br/>
                    "<b>{bestWord}</b>"
                </div>
                <div 
                    className="restart"
                    onClick={()=>resetGame()}
                >
                    Restart Game
                </div>
            </div>
        </div>
    );
}

export default GameOverNotification;