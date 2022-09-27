import PokemonCard from "./PokemonCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "./SearchBar"
import Types from "./Types";
import { resetPokemons } from "./actions";

export default function PokemonsCards() {
    const pokemons = useSelector(state => state.pokemons)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button onClick={()=> dispatch(resetPokemons())}>RESET</button>
                <Searchbar></Searchbar>
                <Types></Types>
            </div>
            <div className="Cards">
                {pokemons.map(poke => <PokemonCard
                id={poke.id}
                name={poke.name}
                types={poke.types}
                sprite={poke.sprite}
                /> )}
            </div>
        </div>
    )
}