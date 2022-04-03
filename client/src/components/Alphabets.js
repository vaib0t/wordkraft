/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Alphabets.css';

/* Component import */

/* Asset imports */

function Alphabets({
    currentString
}){

    

    return(
        <div className='Alphabets'>
            {   
               currentString.split('').map((c)=>(
                    <div className="letter">{c.toUpperCase()}</div>
               ))
            }
            {(currentString.length<28)?(
                 <div className="empty-letter">A</div>
            ):('')}
        </div>
    );
}

export default Alphabets;