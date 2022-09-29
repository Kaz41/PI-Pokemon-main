import React from "react";
import "./css/Card.css"
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { resetPokemon } from "./actions";

export default function PokemonCard({id,name, sprite, types}) {
    const history = useHistory();
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(resetPokemon())
        history.push(`pokemon/${id}`);
    }

    return (
        <div id="Card" onClick={handleClick}>
            <img id="sprite" src={sprite} alt="sprite" />
            <h1 id="name">{name}</h1>
            <ul className="TypesCard">
                <h2 className="typeCard" id="type1">{types[0]}</h2>
                <h2 className="typeCard" id="type2">{types[1]}</h2>
            </ul>
        </div>
    )
}