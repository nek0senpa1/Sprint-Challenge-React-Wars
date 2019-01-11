import React from 'react';
import Char3 from './Char3';

function Char2(props) {
    return (
        <div>
        <p>{props.items}</p>
        
        {/*
        <h2>{props.items.map(items => {
            return <Char3 items = {items} />
        })}</h2>
        */}

        </div>
    )
       
}

export default Char2;