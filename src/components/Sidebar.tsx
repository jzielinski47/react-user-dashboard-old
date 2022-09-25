import React from 'react';
import { SidebarProps } from '../interfaces/interfaces';
import ModeSwitch from './ModeSwitch';
import './Sidebar.css';

function Sidebar(props: SidebarProps) {

    const projectName: string = "User Dashboard"

    return (
        <div className='sidebar'>
            <span className='title'>{projectName}</span>
            <ModeSwitch darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
        </div>
    );
}

export default Sidebar;