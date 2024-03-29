import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getPokemon } from "./actions";
import "./css/Pokemon.css"

export default function Pokemon() {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    const {id} = useParams()
    let tipos = []

    state.pokemons.forEach(element => {
        if(element.id === id) {
            tipos.push(element.types[0])
            if(element.types.length > 1) {
                tipos.push(element.types[1])
            }
        }
    })

    useEffect(() => {
        dispatch(getPokemon(id));
    });

    return (
        <div className="Pokemon">
            <Link to="/pokemons" id="GoBack">←VOLVER</Link>
            <img className="Sprite" src={state.pokemon.sprite} alt="sprite" />
            <div className="Stats">
                <div className="NombreContent">
                    <h1 id="Nombre">{state.pokemon.name}</h1>
                </div>
                <div className="typesPokemon">
                    <h2>Tipos:</h2>
                    <h3>{tipos[0]}</h3>
                    <h3>{tipos[1]}</h3>
                </div>
                <h2>Altura: {state.pokemon.height}</h2>
                <h2>Peso: {state.pokemon.weight}</h2>
                <h2>Vida: {state.pokemon.hp}</h2>
                <h2>Ataque: {state.pokemon.attack}</h2>
                <h2>Defensa: {state.pokemon.defense}</h2>
                <h2>Velocidad: {state.pokemon.speed}</h2>
            </div>
        </div>
    );
}