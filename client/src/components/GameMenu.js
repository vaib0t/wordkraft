/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/GameMenu.css';

/* Component import */

/* Asset imports */

function GameMenu(
    {
        setGameStarted,
        username,
        setUsername
    }
){

    return(
        <div className='GameMenu'>
            
            <div className="instructions">
               <div className='instruction-point'>
                The instructions are as easy as pie. <br/><br/>

                Five letters are shown on the screen. After choosing your first letter, letters are then shuffled again.<br/>

                Your only goal in this game is to pick a series of letters one after the other and make the longest word possible.<br/><br/><br/>

                It's time to test your vocabulary game & go up the leaderboard.<br/>

                <b>All the best lads!</b>
               </div>
            </div>
            <input 
                className='username-input' 
                type="text" 
                name="username" 
                id="username" 
                placeholder='Username'
                value={username}
                onChange = {(i) => {
                    setUsername(i.target.value);
                }}
            />
            <button 
                className='start-button'
                onClick={() => {
                    setGameStarted(true);
                }}
            >
                Start Game
            </button>
        </div>
    );
}

export default GameMenu;