import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPokemons, resetPokemons } from "./actions"

export default function Types() {
    const types = useSelector(state => state.types)
    const [texto, setTexto] = useState("");
    const dispatch = useDispatch()

    const handdleChange = (evento) => {
        setTexto(evento.target.value)
    }

    return (
        <form className="TypesFilter" onSubmit={(e) => {
                e.preventDefault();
                dispatch(filterPokemons(texto));
            } 
        }>
            <select name="s" id="s" onChange={(evento) => handdleChange(evento)}>
                <option value=""></option>
                {types.map(t => <option value={t.name}>
                    {t.name}
                </option>)}
            </select>
            <input type="submit"/>
        </form>
    )
}