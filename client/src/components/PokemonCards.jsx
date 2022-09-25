import React, {useState} from "react";
const axios = require('axios');
import PokemonCard from "./PokemonCard";

export default function PokemonsCards() {
    const pokemons = axios.get("http://localhost:3001/pokemons")

    return (
        <div class="pokemonCards">
            {pokemons.map(poke => <PokemonCard
                img={poke.sprite}
                name={poke.name}
                types={poke.types}
            />)}
        </div>
    )
}