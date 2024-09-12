import React from "react";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";

const NavBar = () => {
    const t = useTranslations("AlimhaPage.Header");
    return (
        <ul className="flex max-md:flex-col justify-around w-full max-w-[500px]">
            <NavLink text={t("Solutions")} href="#our-services" />
            <NavLink text={t("About us")} href="#who-are-we" />
            <NavLink text={t("Contact")} href="#contact" />
        </ul>
    );
};

export default NavBar;
