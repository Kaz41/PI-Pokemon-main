import React from "react";
import {Link} from 'react-router-dom';

export default function PokemonCard({name, sprite, types}) {
    return (
        <Link to='pokemon/1' className="Carta">
            <h1>{name}</h1>
            <div>
                <h2>{types[0]}</h2>
                <h2>{types[1]}</h2>
            </div>
            <img src={sprite} alt="sprite" />
        </Link>
    )
}