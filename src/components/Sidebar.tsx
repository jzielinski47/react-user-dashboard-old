import React from 'react';
import './Sidebar.css';

const projectName: string = "User Dashboard"

function Sidebar() {
    return (
        <div className='sidebar'>
            <span className='title'>{projectName}</span>
            <button className='btn-1'>mode switch</button>
        </div>
    );
}

export default Sidebar;