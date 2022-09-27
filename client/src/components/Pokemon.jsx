import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemon } from "./actions";

export default function Pokemon() {
    const state = useSelector(state => state.pokemon);
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getPokemon(id));
    }, []);

    return (
        <div>
            <h1>Pokemon</h1>
            <h1>{id}</h1>
            <h2>{state.name}</h2>
        </div>
    );
}