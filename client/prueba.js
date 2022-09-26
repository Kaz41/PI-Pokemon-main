const axios = require('axios');

async function hola() {
    console.log("inicio")

    const pokemon = await axios('http://localhost:3001/pokemons/7').then(response => response.data)

    let prueba = {
        pokemon: pokemon
    }

    console.log(prueba.pokemon)
}

hola();