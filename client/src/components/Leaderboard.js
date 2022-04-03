/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Leaderboard.css';
import axios from '../axios.js';

/* Component import */
import Loader from './Loader';

/* Asset imports */

function Leaderboard(){

    const [loading, setloading] = useState(true);
    const [leaderboard, setleaderboard] = useState(null);

    useEffect(() => {
        const extractLeaderboard = async () => {
            const {data} = await axios.get("/getLeaderboard")
            setleaderboard(data);
        }
        extractLeaderboard();
    }, [])

    useEffect(() => {
        if(leaderboard!=null) setloading(false);
    },[leaderboard])
    

    return(
        <div className='Leaderboard'>
            <div className='Leaderboard-title'>
                LEADERBOARD
            </div>  
            {
                (loading)?(
                    <Loader/>
                ):(
                    <>
                        <div className="leaderboard-table">
                            <div className="name-col">
                                {
                                    leaderboard.map((item,key)=>(
                                        <div className="leaderboard-name"
                                        key={key}
                                        >
                                            {item.name}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='score-col'>
                                {
                                    leaderboard.map((item,key)=>(
                                        <div className="leaderboard-score"
                                        key={key}
                                        >
                                            {(item.score>9)?item.score:(
                                                `0${item.score}`
                                            )}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                )
            }
                
        </div>
    );
}

export default Leaderboard;