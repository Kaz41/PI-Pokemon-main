import React from "react";
import SearchBar from "./SearchBar";
import Logo from "../image/logo.png"
import './Nav.css';

export default function Nav() {
    return (
        <div>
            <div>
            <img src={Logo} alt="logo" />
            <h2>Henry Pokemon</h2>
            </div>
        </div>
    );
}