import React from "react";

export default function PokemonCard(props) {
        return (
            <div class="Card">
                <img src="" alt="sprite" class="imgCard" />
                <h1 class="nameCard">{props.name}</h1>
                <h3 class="typeCard">{props.types[0]}</h3>
            </div>
        )  
}