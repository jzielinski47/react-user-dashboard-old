import React from 'react';
import { SidebarProps } from '../interfaces/interfaces';
import './Sidebar.css';

const projectName: string = "User Dashboard"


function Sidebar(props: SidebarProps) {
    return (
        <div className='sidebar'>
            <span className='title'>{projectName}</span>
            <button className='btn-1' onClick={() => { props.setDarkMode((props.darkMode) ? false : true) }}>mode switch</button>
        </div>
    );
}

export default Sidebar;