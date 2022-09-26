import React from "react";
import Logo from "../image/logo.png"

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