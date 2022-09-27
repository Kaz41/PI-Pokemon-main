import React from "react";
import {Link} from 'react-router-dom';

export default function PokemonCard({id,name, sprite, types}) {
    return (
        <Link to={`pokemon/${id}`} className="Card">
            <h1>{name}</h1>
            <div className="TypesCard">
                <h2>{types[0]}</h2>
                <h2>{types[1]}</h2>
            </div>
            <img src={sprite} alt="sprite" />
        </Link>
    )
}