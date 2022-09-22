import { Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { deepOrange } from '@mui/material/colors';
import './Header.css';
import React from 'react';

interface Account {
    id?: string;
    name: string;
    description: string;
}

function Header() {

    const user: Account = {
        name: "John Snow",
        description: "Project Manager"
    }

    const getInitials = (name: string) => {
        const names = name.split(' ')
        let initials: string = "";
        for (let i = 0; i < names.length; i++) {
            initials += names[i].charAt(0)
        }
        return initials;
    }

    return (
        <div className='header'>
            <div className='header_left'>
                <MenuIcon /> Dashboard
            </div>
            <div className='header_right'>
                <div className='user-account'>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>{getInitials(user.name)}</Avatar>
                    <div className='account-details'>
                        <span className='username '>{user.name}</span>
                        <span className='user-description'>{user.description}</span>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Header;