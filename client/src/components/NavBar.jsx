import React from "react";
import Logo from "../image/logo.png"
import "./css/Nav.css"

export default function Nav() {
    return (
        <div className="NavBar">
            <div className="inicio">
                <img className="logo" src={Logo} alt="logo" />
                <h2>Henry Pokemon</h2>
            </div>
        </div>
    );
}