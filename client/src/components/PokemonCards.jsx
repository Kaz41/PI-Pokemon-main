import PokemonCard from "./PokemonCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "./SearchBar"
import Types from "./Types";
import { resetPokemons, sortPokemons } from "./actions";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import "./css/Pokedex.css"

export default function PokemonsCards() {
    const pokemons = useSelector(state => state.pokemons)
    const dispatch = useDispatch()

    const [page, setPage] = useState(1)
    const [perPage] = useState(12)

    const max = pokemons.length / perPage;

    const handdleChange = (evento) => {
        dispatch(sortPokemons(evento.target.value))
    }

    useEffect(()=>{
    }, [pokemons])
    
    return (
        <div className="PokedexBox">
            <div className="Pokedex">
                <div className="AjustesPokedex">
                    <div className="AjusteContent">
                        <button onClick={()=> dispatch(resetPokemons())}>RESET</button>
                        <label id="labelFiltro">Filtrar Tipo: </label>
                        <Types></Types>
                        <label id="labelOrder">Ordenar por: </label>
                        <select className="Ordenamiento" onChange={(evento) => handdleChange(evento)}>
                            <option value=""></option>
                            <option value="ND">↓A-Z</option>
                            <option value="NA">↑Z-A</option>
                            <option value="AD">↓Ataque</option>
                            <option value="AA">↑Ataque</option>
                        </select>
                    </div>
                    <div className="SearchBarContent">
                        <Searchbar></Searchbar>
                    </div>
                </div>
                <div className="Cards">
                    {pokemons
                    .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
                    .map(poke => <PokemonCard
                    id={poke.id}
                    name={poke.name}
                    types={poke.types}
                    sprite={poke.sprite}
                    /> )}
                </div>
                <div className="PaginationContent">
                    <Pagination page={page} setPage={setPage} max={max} />
                </div>
            </div>
        </div>
    )
}