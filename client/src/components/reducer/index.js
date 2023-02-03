import {GET_TYPES,GET_POKEMON,GET_POKEMONS,PUT_POKEMON,SEARCH_POKEMON,RESET,FILTER,SORT,RESET_POKEMON} from "../actions/types";

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
                pokemonsAux: action.payload,
                pokemons: action.payload,
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
            let result = state.pokemons.filter(poke => poke.types[0] === action.payload || poke.types[1] === action.payload)
            return {
                ...state,
                pokemons: result
            }
        case SORT:
            let sort = state.pokemons.slice()
            switch(action.payload) {
                case "ND": 
                    sort.sort((a, b) => {
                        if(a.name > b.name) {
                            return 1
                        }
                        if(a.name < b.name) {
                            return -1
                        }
                        return 0
                    })
                    break;
                case "NA":
                    sort.sort((a, b) => {
                        if(a.name > b.name) {
                            return -1
                        }
                        if(a.name < b.name) {
                            return 1
                        }
                        return 0
                    })
                    break;
                case "AD": 
                    sort.sort((a, b) => {
                        if(a.attack > b.attack) {
                            return 1
                        }
                        if(a.attack < b.attack) {
                            return -1
                        }
                        return 0
                    })
                    break;
                case "AA":
                    sort.sort((a, b) => {
                        if(a.attack > b.attack) {
                            return -1
                        }
                        if(a.attack < b.attack) {
                            return 1
                        }
                        return 0
                    })
                    break;
                default:
                    break;
            }
            return {
                ...state,
                pokemons: sort
            }
        case PUT_POKEMON: 
            return {
                ...state,
                pokemonsAux: state.pokemons.concat(action.payload),
                pokemons: state.pokemons.concat(action.payload)
            }
        case RESET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }       
        default:
            return state;
    }
}

export default reducer;