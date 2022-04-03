/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Main.css';
import axios from '../axios'

/* Component import */
import Title from './Title';
import GameMenu from './GameMenu';
import GamingArea from './GamingArea';
import GameOverNotification from './GameOverNotification';

/* Asset imports */

function Main(){

    const [gameStarted, setGameStarted] = useState(false);
    const [username, setUsername] = useState('');
    const [gameOverNotification,setGameOverNotification] = useState(false);
    const [score, setScore] = useState(0);
    const [bestAnswer,setbestAnswer] = useState('');
    const [currentString, setCurrentString] = useState('');

    const ForceGameOver = async () => {
        setGameOverNotification(true);
        const response = await axios.post('/insertToLeaderboard', {
            username: username,
            score: score
        })
    }

    const resetGame = () => {
        setScore(0);
        setCurrentString('');
        setbestAnswer('');
        setGameOverNotification(false);
    }

    return(
        <div className='Main'>
            {
                (gameStarted)?(
                    <>
                        {
                            (gameOverNotification)?(
                                <GameOverNotification
                                    score={score}
                                    bestWord={bestAnswer}
                                    resetGame={resetGame}
                                />
                            ):('')
                        }
                        <Title/>
                        <GamingArea
                            username = {username}
                            setGameOverNotification = {setGameOverNotification}
                            score={score}
                            setScore={setScore}
                            bestAnswer={bestAnswer}
                            setbestAnswer={setbestAnswer}
                            currentString={currentString}
                            setCurrentString={setCurrentString}
                            ForceGameOver={ForceGameOver}
                        />
                    </>
                   
                ):( 
                    <>
                        <Title/>
                        <GameMenu
                            setGameStarted = {setGameStarted}
                            username = {username}
                            setUsername = {setUsername}
                           
                        />
                    </>
                )
            }
        </div>
    );
}

export default Main;