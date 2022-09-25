import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { deepOrange } from '@mui/material/colors';
import './Header.css';
import React from 'react';
import { Account, DisplayProps } from '../interfaces/interfaces';

function Header(props: DisplayProps) {

    const user: Account = {
        name: "Jakub Zieliński",
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
        <div className={(props.mode) ? 'header dark' : 'header light'}>
            <div className='header-content'>
                <MenuIcon /> <span className="title">{props.tab}</span>
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