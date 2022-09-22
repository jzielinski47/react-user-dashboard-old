import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deepOrange } from '@mui/material/colors';
import Hamburger from './Hamburger';
import './Header.css';
import React from 'react';

interface Account {
    id?: string;
    name: string;
    description: string;
}

function Header() {

    const user: Account = {
        name: "User Name",
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
            <div className='header-content'>
                <Hamburger /> <span className="title">Dashboard</span>
            </div>
            <div className='header-content'>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>{getInitials(user.name)}</Avatar>
                <div className='account-details'>
                    <span className='username '>{user.name}</span>
                    <span className='user-description'>{user.description}</span>
                </div>
                <MoreVertIcon />
            </div>
        </div>
    );
}

export default Header;