import React from "react";
import { useSelector } from "react-redux";

export default function Types() {
    const types = useSelector(state => state.types)

    return (
        <form className="TypesFilter">
            {types.map(t => 
                <div className="Radios">
                    <input type="radio" id={t.name} value={t.name} name="Type"/>
                    <label for={t.name}>{t.name}</label>
                </div>
            )}
            <input type="submit"/>
            <input type="reset"/>
        </form>
    )
}