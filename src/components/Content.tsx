import './stylesheets/Content.css';
import { DisplayContentProps, PanelProperities } from '../interfaces/interfaces';
import Panel from './Panel';
import React from 'react';

function Content(props: DisplayContentProps) {

    // dadad

    let panels: PanelProperities[] = []

    for (let i = 0; i < 6; i++) {
        panels.push({ id: i, title: `panel ${i}` })
    }

    return (
        <div className={props.mode ? 'content dark' : 'content light'}>
            {panels.map(panel => <Panel mode={props.mode} key={panel.id} title={panel.title} />)}
        </div>
    );
}

export default Content;