const axios = require('axios');

async function hola() {
    console.log("inicio")

    const pokemon = await axios('http://localhost:3001/pokemons')

    console.log(pokemon.data)
}

hola();