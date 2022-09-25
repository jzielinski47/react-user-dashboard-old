import React from 'react';
import { ModeSwitchProps } from '../interfaces/interfaces';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

function ModeSwitch(props: ModeSwitchProps) {
    return (
        <div className='mode'>
            {props.darkMode ? <LightModeIcon onClick={() => { props.setDarkMode((props.darkMode) ? false : true) }} /> : <NightlightIcon onClick={() => { props.setDarkMode((props.darkMode) ? false : true) }} />}
        </div>
    );
}

export default ModeSwitch;