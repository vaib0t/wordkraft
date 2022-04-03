/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/GameScore.css';

/* Component import */
import Loader from './Loader';

/* Asset imports */

function GameScore({
    loading,
    score
}){

    return(
        <div className='GameScore'>
            <div className='loading-area'>
                {
                    (loading)?(<Loader/>):('')
                }
            </div>
            <div className="score">
                <b>CURRENT SCORE</b>: {(score>9)?score:(`0${score}`)}
            </div>
        </div>
    );
}

export default GameScore;