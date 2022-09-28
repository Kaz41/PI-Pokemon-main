import React from "react";
import Logo from "../image/logo.png"
import "./css/Nav.css"
import {Link} from "react-router-dom"

export default function Nav() {
    return (
        <div className="NavBar">
            <div className="inicio">
                <img className="logo" src={Logo} alt="logo" />
                <h2 id="Henry">Henry Pokemon</h2>
            </div>
            <Link id="create" to="/create">Crear Pokemon</Link>
        </div>
    );
}