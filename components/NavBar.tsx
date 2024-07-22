import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
    return (
        <ul className="w-full flex max-md:flex-col justify-around">
            <NavLink text="Solutions" />
            <NavLink text="A propos" />
            <NavLink text="Contactez-nous" />
        </ul>
    );
};

export default NavBar;
