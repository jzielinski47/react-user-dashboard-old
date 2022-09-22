import { Avatar } from '@mui/material';
import React from 'react';

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                Dashboard
            </div>
            <div className='header_right'>
                <Avatar>JZ</Avatar>
            </div>
        </div>
    );
}

export default Header;