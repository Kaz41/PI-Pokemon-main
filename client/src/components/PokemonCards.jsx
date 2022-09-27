import PokemonCard from "./PokemonCard";
import React, {useState} from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar"

export default function PokemonsCards() {
    const pokemons = useSelector(state => state.pokemons)

    return (
        <div className="Pokedex">
            <NavBar></NavBar>
            <div className="Cards">
                {pokemons.map(poke => <PokemonCard
                name={poke.name}
                types={poke.types}
                sprite={poke.sprite}
                /> )}
            </div>
        </div>
    )
}