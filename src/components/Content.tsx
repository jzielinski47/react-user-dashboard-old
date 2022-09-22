import './Content.css';
import React from 'react';
import Panel from './Panel';

interface Panels {
    id: number;
    title: string;
    description?: string;
    icon?: string;
}

const panels: Panels[] = [
    { id: 0, title: `panel 0`, description: 'lorem ipsum', icon: '1' },
    { id: 1, title: `panel 1`, description: 'lorem ipsum 2', icon: '2' },
    { id: 2, title: `panel 2`, description: 'lorem ipsum 2', icon: '2' },
]

function Content() {
    return (
        <div className='content'>
            {panels.map(panel => <Panel key={panel.id} title={panel.title} description={panel.description} />)}
        </div>
    );
}

export default Content;