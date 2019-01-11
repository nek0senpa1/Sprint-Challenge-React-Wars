import React from 'react';
import Char from './Char';

function Characters(props) {
    return (
        
        <h2 class ="swdisplay">{props.stuff.map(items => {
            return <Char items = {items} />
        })}</h2>
    )
}

export default Characters;