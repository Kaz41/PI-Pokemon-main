import React from "react";
import Logo from "../image/logo.png"
import "./css/Nav.css"
import {Link} from "react-router-dom"

export default function Nav() {
    return (
        <div className="NavBar">
            <div className="inicio">
                <img className="logo" src={Logo} alt="logo" />
                <h2>Henry Pokemon</h2>
            </div>
            <Link to="/create">CREAR</Link>
        </div>
    );
}