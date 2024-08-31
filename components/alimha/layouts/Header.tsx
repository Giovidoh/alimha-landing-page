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
        <header className="sticky top-0 left-0 flex justify-between bg-white w-full gap-4 lg:px-[10%] max-lg:px-[5%] py-2 shadow-md z-50">
            <div className="flex justify-between items-center pr-10">
                <Logo />
            </div>
            <nav
                className="max-md:hidden flex justify-center items-center w-1/2"
                role="navigation"
            >
                <NavBar />
            </nav>
            <div className="hidden min-[950px]:flex items-center gap-3">
                <div className="hidden min-[1100px]:flex items-center">
                    <LocalSwitcherSelect />
                </div>
                <div className="flex justify-end items-center">
                    <ButtonGradientStyle1
                        fromColor="from-primary-blue"
                        toColor="to-secondary-blue"
                        text={t("Become partner")}
                    />
                </div>
            </div>
            <div className="flex min-[1100px]:hidden justify-end items-center">
                <BurgerButton setBurgerDropped={setBurgerDropped} />
                {burgerDropped && (
                    <div className="absolute right-0 top-full p-10 bg-white bg-opacity-80 backdrop-blur">
                        <nav className="block md:hidden" role="navigation">
                            <NavBar />
                        </nav>
                        <div className="flex flex-col gap-3">
                            <div className="flex min-[1100px]:hidden items-center">
                                <LocalSwitcherSelect />
                            </div>
                            <div className="flex min-[950px]:hidden">
                                <ButtonGradientStyle1
                                    fromColor="from-primary-blue"
                                    toColor="to-secondary-blue"
                                    text={t("Become partner")}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
