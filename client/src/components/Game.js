/* Library import */
import { useState, useEffect } from 'react';

/* Dependency import */
import './css/Game.css';
import axios from '../axios';

/* Component import */
import GameScore from './GameScore';
import Alphabets from './Alphabets';
import Options from './Options';
import IngameMenu from './IngameMenu';

/* Asset imports */

function Game({
    username,
    setGameOverNotification,
    score,
    setScore,
    bestAnswer,
    setbestAnswer,
    currentString,
    setCurrentString,
    ForceGameOver
}) {

    const [loading, setloading] = useState(true);
    const [options, setoptions] = useState(null);
   
    useEffect(() => {
        const getCurrentScore = async () => {
            setloading(true);
            const { data } = await axios.post('/getScore', {
                word: currentString
            })
            if(currentString!=="" && data.word && data.word.length>bestAnswer.length){
                setbestAnswer(data.word);
            }
            setScore(data.score);
            setloading(false);
        }
        getCurrentScore();
    }, [currentString])

    useEffect(() => {
        const getLetters = async () => {
            setloading(true);
            const { data } = await axios.post('/getLetters', {
                word: currentString
            })
            setoptions(data);
            setloading(false);
        }
        getLetters();
    }, [currentString])

    const addLetter = (c) => {
        var tempString = currentString;
        tempString = tempString + c;
        setCurrentString(tempString);
    }

    useEffect(() => {
        const GameOver = async () => {
            if(options.length<1 && currentString!==""){
                setGameOverNotification(true);
                const response = await axios.post('/insertToLeaderboard', {
                    username:username,
                    score:score
                })
            }
        }
        GameOver();
    }, [options,currentString,score])



    return (
        <div className='Game'>
            {/* menu &  loader*/}
            <GameScore
                loading={loading}
                score={score}
            />
            {/* alphabets */}
            <Alphabets
                currentString={currentString}
            />
            {/* options */}
            <Options
                options={options}
                addLetter={addLetter}
            />
            {/* exit and other menu */}
            <IngameMenu 
                ForceGameOver={ForceGameOver}
            />
        </div>
    );
}

export default Game;