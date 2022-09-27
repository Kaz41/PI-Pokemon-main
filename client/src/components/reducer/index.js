import { auxPokemons } from "../actions";
import {GET_TYPES,GET_POKEMON,GET_POKEMONS,PUT_POKEMON,SEARCH_POKEMON,RESET, FILTER} from "../actions/types";

const initialState = {
    types: [],
    pokemons: [],
    pokemonsAux: [],
    pokemon: {}
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_TYPES: 
            return {
                ...state,
                types: action.payload,
            };
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            };
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                pokemonsAux: action.payload
            }    
        case SEARCH_POKEMON: 
            return {
                ...state,
                pokemons: action.payload
            }
        case RESET:
            return {
                ...state,
                pokemons: state.pokemonsAux
            }
        case FILTER: 
            let result = state.pokemons.filter(poke => {
                if(poke.types.length > 1 ) {
                    if(poke.types[0] === action.payload || poke.types[1] === action.payload) {
                        return poke;
                    }
                }
                if(poke.types[0] === action.payload) {
                    return poke
                }
            })
            return {
                ...state,
                pokemons: result
            }
        case PUT_POKEMON: 
            return {
                ...state,
                pokemons: state.pokemons.concat(action.payload),
                pokemonsAux: state.pokemons.concat(action.payload)
            }            
        default:
            return state;
    }
}

export default reducer;