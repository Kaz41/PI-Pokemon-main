import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterPokemons, resetPokemons } from "./actions"

export default function Types() {
    const types = useSelector(state => state.types)
    const dispatch = useDispatch()

    const handdleChange = (evento) => {
        dispatch(resetPokemons())
        dispatch(filterPokemons(evento.target.value));
    }

    return (
        <select className="TypesFilter" onChange={(evento) => handdleChange(evento)}>
            <option value=""></option>
            {types.map(t => <option value={t.name}>
                {t.name}
            </option>)}
        </select>
    )
}