import './Content.css';
import { DisplayProps, PanelProperities } from '../interfaces/interfaces';
import Panel from './Panel';
import React from 'react';

let panels: PanelProperities[] = []

for (let i = 0; i < 4; i++) {
    panels.push({ id: i, title: `panel ${i}` })
}

function Content(props: DisplayProps) {
    return (
        <div className='content'>
            {panels.map(panel => <Panel key={panel.id} title={panel.title} />)}
        </div>
    );
}

export default Content;