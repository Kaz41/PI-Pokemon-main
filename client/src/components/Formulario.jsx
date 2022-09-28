import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postPokemon } from "./actions"
import {Link} from "react-router-dom"

export default function Formulario() {
    const [tipo1, setTipo1] = useState();
    const [tipo2, setTipo2] = useState();
    const [nombre, setNombre] = useState();
    const [ataque, setAtaque] = useState();
    const [defensa, setDefensa] = useState();
    const [velocidad, setVelocidad] = useState();
    const [hp, setHP] = useState();
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [sprite, setSprite] = useState();
    const types = useSelector(state => state.types);
    const pokemons = useSelector(state => state.pokemons);
    const dispatch = useDispatch()

    const postear = () =>{
        let pokemon = {
            id: (pokemons.length+1),
            name: nombre,
            health: Number(hp),
            attack: Number(ataque),
            defense: Number(defensa),
            speed: Number(velocidad),
            sprite: sprite,
            height: Number(altura),
            weight: Number(peso)
        }
        let tipos = []

        types.map(t => {
            if(t.name === tipo1){
                tipos.push({id: t.id, name: tipo1})
            }
        })
        if(tipo2) {
            types.map(t => {
                if(t.name === tipo2){
                    tipos.push({id: t.id, name: tipo2})
                }
            })
        }
        console.log(pokemon)
        dispatch(postPokemon(pokemon,tipos))
    }

    const handdleChange = (evento) => {
        switch(evento.target.id) {
            case "FromNombre": setNombre(evento.target.value);
                break;
            case "FormHP": setHP(evento.target.value);
                break;
            case "FormAltura": setAltura(evento.target.value);
                break;
            case "FormPeso": setPeso(evento.target.value);
                break;
            case "FormAt": setAtaque(evento.target.value);
                break;
            case "FormDef": setDefensa(evento.target.value);
                break;
            case "FormVel": setVelocidad(evento.target.value);
                break;
            case "FormSprite": setSprite(evento.target.value);
                break;
            case "FormType1": setTipo1(evento.target.value);
                break;
            case "FormType2": setTipo2(evento.target.value);
                break;
        }
    }

    return (
        <div>
            <Link to="/pokemons" >VOLVER</Link>
            <h1>Formulario Pokemon</h1>
            <form className="TypesFilter" onSubmit={(e) => {
                    e.preventDefault();
                    postear();
                } 
            }>
                <label>Nombre</label>
                <input id="FromNombre" type="text" placeholder="Nombre" required="true" onChange={(evento) => handdleChange(evento)}/>
                <label>Altura</label>
                <input id="FormAltura" type="number" placeholder="Altura" required="true" onChange={(evento) => handdleChange(evento)}/>
                <label>HP</label>
                <input id="FormHP" type="number" placeholder="HP" required="true" onChange={(evento) => handdleChange(evento)}/>
                <label>Peso</label>
                <input id="FormPeso" type="number" placeholder="Peso" required="true" onChange={(evento) => handdleChange(evento)}/>
                <label>Ataque</label>
                <input id="FormAt" type="number" placeholder="Ataque" required="true" onChange={(evento) => handdleChange(evento)}/>
                <label>Defensa</label>
                <input id="FormDef" type="number" placeholder="Defensa" required="true" onChange={(evento) => handdleChange(evento)}/>
                <label>Velocidad</label>
                <input id="FormVel" type="number" placeholder="Velocidad" required="true" onChange={(evento) => handdleChange(evento)}/>
                <label>Sprite</label>
                <input id="FormSprite" type="ulr" placeholder="Sprite" required="true" onChange={(evento) => handdleChange(evento)}/>
                <label>Tipos</label>
                <select id="FormType1" required="true" onChange={(evento) => handdleChange(evento)}>
                    <option value=""></option>
                    {types.map(t => <option value={t.name}>
                        {t.name}
                    </option>)}
                </select>
                <select id="FormType2" onChange={(evento) => handdleChange(evento)}>
                    <option value=""></option>
                    {types.map(t => <option value={t.name}>
                        {t.name}
                    </option>)}
                </select>
                <input type="submit"/>
            </form>
        </div>
    )
}