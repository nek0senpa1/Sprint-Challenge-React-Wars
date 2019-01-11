import React from 'react';
import Char2 from './Char2';

function Char(props) {
    return(
        <div>
        <h1>{props.items.name}</h1>
        <h2>Mass: {props.items.mass} - Height: {props.items.height} - Birth year: {props.items.birth_year} </h2>
        
        <h2>Favorite Starships:{props.items.starships.map(items => {
            return <Char2 items = {items} />
        })}</h2>


        </div>
    )
}

export default Char;