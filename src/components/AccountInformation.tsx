import React from 'react';
import { Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deepOrange } from '@mui/material/colors';
import { Account } from '../interfaces/interfaces';

function AccountInformation(props: Account) {

    const getInitials = (name: string) => {
        const names = name.split(' ')
        let initials: string = "";
        for (let i = 0; i < names.length; i++) {
            initials += names[i].charAt(0)
        }
        return initials;
    }

    return (
        <>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>{getInitials(props.name)}</Avatar>
            <div className='account-details'>
                <span className='username '>{props.name}</span>
                <span className='user-description'>{props.description}</span>
            </div>
            <MoreVertIcon onClick={props.setSettings} />
        </>
    );
}

export default AccountInformation;