import './Content.css';
import { PanelProperities } from '../interfaces/interfaces';
import Panel from './Panel';
import React from 'react';


const panels: PanelProperities[] = [
    { id: 0, title: `panel 0` },
    { id: 1, title: `panel 1` },
    { id: 2, title: `panel 2` },
]

function Content() {
    return (
        <div className='content'>
            {panels.map(panel => <Panel key={panel.id} title={panel.title} />)}
        </div>
    );
}

export default Content;