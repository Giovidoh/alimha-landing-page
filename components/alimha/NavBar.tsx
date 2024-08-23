import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
    return (
        <ul className="w-full flex max-md:flex-col justify-around">
            <NavLink text="Solutions" href="#our-services" />
            <NavLink text="A propos" href="#about-us" />
            <NavLink text="Contactez-nous" href="#contact-us" />
        </ul>
    );
};

export default NavBar;
