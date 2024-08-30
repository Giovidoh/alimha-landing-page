"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import NavBar from "../NavBar";
import BurgerButton from "../buttons/BurgerButton";
import ButtonGradientStyle1 from "../buttons/ButtonGradientStyle1";
import LocalSwitcherSelect from "../selects/LocalSwitcherSelect";
import { useTranslations } from "next-intl";

const Header = () => {
    const [burgerDropped, setBurgerDropped] = useState(false);
    const t = useTranslations("AlimhaPage");

    return (
        <header className="sticky top-0 left-0 flex justify-between bg-white w-full lg:px-[10%] max-lg:px-[5%] py-2 shadow-md z-50">
            <div className="flex justify-between items-center pr-10">
                <Logo />
            </div>
            <nav
                className="max-md:hidden flex items-center w-1/2"
                role="navigation"
            >
                <NavBar />
            </nav>
            <div className="max-md:hidden flex justify-end items-center">
                <ButtonGradientStyle1
                    fromColor="from-primary-blue"
                    toColor="to-secondary-blue"
                    text={t("Become partner")}
                />
            </div>
            <div className="flex items-center">
                <LocalSwitcherSelect />
            </div>
            <div className="md:hidden flex justify-end items-center">
                <BurgerButton setBurgerDropped={setBurgerDropped} />
                {burgerDropped && (
                    <div className="absolute right-0 top-full p-10 bg-white bg-opacity-80 backdrop-blur">
                        <NavBar />
                        <ButtonGradientStyle1
                            fromColor="from-primary-blue"
                            toColor="to-secondary-blue"
                            text={t("Become partner")}
                        />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
