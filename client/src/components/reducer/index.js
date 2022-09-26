import {GET_TYPES,GET_POKEMON,GET_POKEMONS,PUT_POKEMON,FILTRAR,SEARCH_POKEMON,RESET} from "../actions/types";

const initialState = {
    types: [],
    pokemons: [],
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
                pokemons: action.payload
            }    
        default:
            return state;
    }
}

export default reducer;