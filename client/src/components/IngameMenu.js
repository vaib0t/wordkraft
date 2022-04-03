/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/IngameMenu.css';

/* Component import */
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { IconButton } from '@mui/material';

/* Asset imports */

function IngameMenu({
    ForceGameOver
}){

    return(
        <div className='IngameMenu'>
            <div className='ExitButton'>
                <IconButton 
                    color='inherit'
                    onClick={async () => await ForceGameOver()}
                >
                    <ExitToAppIcon
                        fontSize='large'
                    />
                </IconButton>
            </div>
        </div>
    );
}

export default IngameMenu;