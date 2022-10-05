import React, { useState } from 'react';
import { SidebarProps } from '../interfaces/interfaces';
import ModeSwitch from './ModeSwitch';
import './stylesheets/Sidebar.css';

function Sidebar(props: SidebarProps) {

    const getInitials = (name: string) => {
        const names = name.split(' ')
        let initials: string = "";
        for (let i = 0; i < names.length; i++) {
            initials += names[i].charAt(0)
        }
        return initials;
    }

    return (
        <div className={props.expansion ? 'sidebar wide' : 'sidebar narrow'}>
            <span className='title'>{props.expansion ? getInitials(props.projectName) : getInitials(props.projectName)}</span>
            <ModeSwitch darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
        </div>
    );
}

export default Sidebar;