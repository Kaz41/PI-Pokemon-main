import PokemonCard from "./PokemonCard";
import React, {useState} from "react";
import { useSelector } from "react-redux";
const axios = require('axios');


export default function PokemonsCards() {
    const pokemons = useSelector(state => state.pokemons)

    return (
        <div className="pokemonCards">
            {pokemons.map(poke => <PokemonCard
            name={poke.name}
            types={poke.types}
            sprite={poke.sprite}
          /> )}
        </div>
    )
}