import './Panel.css'
import React, { useState } from 'react';
import { PanelProperities } from '../interfaces/interfaces';

function Panel(props: PanelProperities) {

    let [selected, select] = useState(false);
    let [background, setBackground] = useState('');

    return (
        <div className='panel' onClick={() => { select(selected = !selected); console.log(selected); }}>
            <span className='title'>{props.title}</span>
        </div >
    );
}

export default Panel;