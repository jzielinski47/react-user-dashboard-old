import './Panel.css'
import React, { useState } from 'react';
import { PanelProperities } from '../interfaces/interfaces';

function Panel(props: PanelProperities) {

    let [selected, select] = useState(false);

    return (
        <div className='panel' onClick={() => select(selected = !selected)}>
            <span className='title'>{props.title}</span>
        </div >
    );
}

export default Panel;