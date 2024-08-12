"use client";

import React, { useState } from "react";
import Logo from "../Logo";
import NavBar from "../NavBar";
import BurgerButton from "../buttons/BurgerButton";
import ButtonGradientStyle1 from "../buttons/ButtonGradientStyle1";

const Header = () => {
    const [burgerDropped, setBurgerDropped] = useState(false);

    return (
        <>
            <header className="relative flex justify-between lg:px-[10%] max-lg:px-[5%] py-5">
                <div className="flex justify-between items-center pr-10">
                    <Logo />
                </div>
                <nav className="max-md:hidden flex items-center w-1/2">
                    <NavBar />
                </nav>
                <div className="max-md:hidden flex justify-end items-center">
                    <ButtonGradientStyle1
                        fromColor="from-primary-blue"
                        toColor="to-secondary-blue"
                        text="Devenir partenaire"
                    />
                </div>
                <div className="md:hidden flex justify-end items-center">
                    <BurgerButton setBurgerDropped={setBurgerDropped} />
                    {burgerDropped && (
                        <div className="absolute right-0 top-full p-10 bg-white bg-opacity-80 backdrop-blur">
                            <NavBar />
                            <ButtonGradientStyle1
                                fromColor="from-primary-blue"
                                toColor="to-secondary-blue"
                                text="Devenir partenaire"
                            />
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
