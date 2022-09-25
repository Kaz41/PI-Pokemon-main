import React from "react";

export default async function Pokemon() {
    const pokemon = await axios('http://localhost:3001/pokemons')

    return (
        <h3>{pokemon.data[0].name}</h3>
    );
}