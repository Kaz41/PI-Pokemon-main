import React from "react";
import { useSelector } from "react-redux";

export default function Types() {
    const types = useSelector(state => state.types)

    return (
        <form>
            {types.map(t => 
                <div>
                    <input type="radio" id={t.name} value={t.name} name="Type"/>
                    <label for={t.name}>{t.name}</label>
                </div>
            )}
            <input type="reset"/>
        </form>
    )
}