import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { getPokemon } from "./actions";

export default function Pokemon() {
    const state = useSelector(state => state.pokemon);
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Pokemon</h1>
            <button onClick={() => dispatch(getPokemon())}> Traer Pokemon</button>
            <h2>{state.name}</h2>
        </div>
    );
}