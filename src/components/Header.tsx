
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';
import React, { useState } from 'react';
import { Account, HeaderProps } from '../interfaces/interfaces';
import AccountInformation from './AccountInformation';


function Header(props: HeaderProps) {

    const [user, setUser] = useState<Account>(
        {
            name: "Jakub Zieliński",
            description: "Project Manager"
        }
    )

    return (
        <div className={(props.mode) ? 'header dark' : 'header light'}>
            <div className='header-content'>
                <MenuIcon onClick={() => props.setExpansion((props.expansion) ? false : true)} /> <span className="title">{props.tab}</span>
            </div>
            <div className='header-content'>
                <AccountInformation name={user.name} description={user.description} />
            </div>
        </div>
    );
}

export default Header;