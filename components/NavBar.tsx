import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
    return (
        <ul className="w-2/6 flex justify-between">
            <NavLink text="Solutions" />
            <NavLink text="A propos" />
            <NavLink text="Contactez-nous" />
        </ul>
    );
};

export default NavBar;
