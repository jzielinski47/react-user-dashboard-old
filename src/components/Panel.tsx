import './Panel.css'
import React from 'react';

interface Props {
    title: string;
    description?: string;
    icon?: string;
}

function Panel(props: Props) {

    return (
        <div className='panel'>
            <span className='panel-title'>{props.title}</span>
            <span className='panel-description'>{props.description}</span>

        </div >
    );


}

export default Panel;