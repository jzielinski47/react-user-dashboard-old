import './Panel.css'
import React from 'react';
import { PanelProperities } from '../interfaces/interfaces';

function Panel(props: PanelProperities) {

    return (
        <div className='panel'>
            <span className='title'>{props.title}</span>
        </div >
    );
}

export default Panel;