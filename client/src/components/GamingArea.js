/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/GamingArea.css';

/* Component import */
import Game from './Game';
import Leaderboard from './Leaderboard';

/* Asset imports */

function GamingArea({
    username,
    setGameOverNotification,
    score,
    setScore,
    bestAnswer,
    setbestAnswer,
    currentString,
    setCurrentString,
    ForceGameOver
}){

    return(
        <div className='GamingArea'>
            {/* game */}
            <Game
                username={username}
                setGameOverNotification={setGameOverNotification}
                score={score}
                setScore={setScore}
                bestAnswer={bestAnswer}
                setbestAnswer={setbestAnswer}
                currentString={currentString}
                setCurrentString={setCurrentString}
                ForceGameOver = {ForceGameOver}
            />
            {/* leaderboard */}
            <Leaderboard/>
        </div>  
    );
}

export default GamingArea;