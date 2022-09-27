
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';
import React, { useState } from 'react';
import { Account, HeaderProps, UserAccount } from '../interfaces/interfaces';
import AccountInformation from './AccountInformation';


function Header(props: HeaderProps) {

    const [user, setUser] = useState<UserAccount>({ name: "Jakub Zieliński", description: "Project Manager" })
    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)

    const extendSettings = () => { setSettingsOpen(settingsOpen ? false : true); console.log('settings', settingsOpen) }

    return (
        <div className={(props.mode) ? 'header dark' : 'header light'}>
            <div className='header-content'>
                <MenuIcon onClick={() => props.setExpansion((props.expansion) ? false : true)} /> <span className="title">{props.tab}</span>
            </div>
            <div className='header-content'>
                <AccountInformation name={user.name} description={user.description} setSettings={extendSettings} />
            </div>
        </div>
    );
}

export default Header;