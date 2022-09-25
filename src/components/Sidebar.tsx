import React from 'react';
import { SidebarProps } from '../interfaces/interfaces';
import './Sidebar.css';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

const projectName: string = "User Dashboard"

function Sidebar(props: SidebarProps) {
    return (
        <div className='sidebar'>
            <span className='title'>{projectName}</span>
            <span className='mode'>{props.darkMode ? <LightModeIcon onClick={() => { props.setDarkMode((props.darkMode) ? false : true) }} /> : <NightlightIcon onClick={() => { props.setDarkMode((props.darkMode) ? false : true) }} />}</span>
        </div>
    );
}

export default Sidebar;