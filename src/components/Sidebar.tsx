import React from 'react';
import './Sidebar.css';

const author: string = "Jakub Zieliński"

function Sidebar() {
    return (
        <div className='sidebar'>
            {author}
        </div>
    );
}

export default Sidebar;