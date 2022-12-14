import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon } from "./actions"
import "./css/SearchBar.css"

export default function SearchBar() {
    const [texto, setTexto] = useState("");
    const dispatch = useDispatch()

    const handdleChange = (evento) => {
        setTexto(evento.target.value)
    }

    return (
        <form className="SearchBar" onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(searchPokemon(texto));
                } 
            }>

            <input 
                id="barra"
                type={"text"}
                placeholder="Buscar Pokemon..."
                onChange={(evento) => handdleChange(evento)}
            />

            <input id="buscar" type="submit" value="Buscar" />
        
        </form>
    )
}