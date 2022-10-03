import React from 'react';
import { UserAccount } from '../interfaces/interfaces';

function UserSettings(props: UserAccount) {
    return (
        <div>
            <span className='title'>{props.name}</span>
        </div>
    );
}

export default UserSettings;