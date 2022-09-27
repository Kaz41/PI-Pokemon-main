import axios from "axios";
import {GET_TYPES,GET_POKEMON,GET_POKEMONS,PUT_POKEMON,FILTRAR,SEARCH_POKEMON,RESET} from "./types";

export const getTypes = () => {
    return async(dispatch) => {
        const types = await axios('http://localhost:3001/types').then(response => response.data)
    
        dispatch({
            type: GET_TYPES,
            payload: types
        });
    }
}

export const getPokemons = () => {
    return async(dispatch) =>{
        const pokemon = await axios('http://localhost:3001/pokemons').then(response => response.data)

        dispatch({
            type: GET_POKEMONS,
            payload: pokemon
        });
    }
}

export const getPokemon = (id) => {
    return async(dispatch) =>{
        const pokemon = await axios(`http://localhost:3001/pokemons/${id}`).then(response => response.data)

        dispatch({
            type: GET_POKEMON,
            payload: pokemon
        });
    }
}

export const searchPokemon = (name) => {
    return async(dispatch) =>{
        const pokemon = await axios(`http://localhost:3001/pokemons?name=${name}`).then(response => response.data)

        dispatch({
            type: SEARCH_POKEMON,
            payload: pokemon
        });
    }
}

export const resetPokemons = () => {
    return {
        type: RESET
    }
}