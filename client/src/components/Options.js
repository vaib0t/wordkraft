/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Options.css';

/* Component import */
import Loader from './Loader';

/* Asset imports */

function Options({
    options,
    addLetter,
}){

    const [loading, setloading] = useState(true);

    useEffect(() => {
        if(options){
            setloading(false);
        }
    },[options])
    

    return(
        <div className='Options'>
            {
                
                (loading)?(<Loader/>):(
                    options.map((item,key) => (
                        <div 
                            className='option-items'
                            onClick={()=>{
                                addLetter(item)
                            }}
                        >
                            {item.toUpperCase()}
                        </div>
                    ))
                )
            }
        </div>
    );
}

export default Options;