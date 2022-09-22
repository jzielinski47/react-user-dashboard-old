import React from 'react';
import './Sidebar.css';

const projectName: string = "User Dashboard"

function Sidebar() {
    return (
        <div className='sidebar'>
            <span className='title'>{projectName}</span>
        </div>
    );
}

export default Sidebar;