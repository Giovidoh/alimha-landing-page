import React from "react";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";

const NavBar = () => {
    const t = useTranslations("AlimhaPage");
    return (
        <ul className="w-full flex max-md:flex-col justify-around">
            <NavLink text={t("Solutions")} href="#our-services" />
            <NavLink text={t("About us")} href="#who-are-we" />
            <NavLink text={t("Contact")} href="#contact" />
        </ul>
    );
};

export default NavBar;
