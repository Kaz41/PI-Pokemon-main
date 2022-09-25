
import React from "react";

export default async function Pokemon() {
    fetch("http://localhost:3001/pokemons").then(res => res.json()).then(json => {console.log(json)})

    return (
        <h3>{axios.get("http://localhost:3001/pokemons/7")}</h3>
    );
}