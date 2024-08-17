"use client";
import React, { useState } from "react";
import SendmoLogo from "@/public/assets/sendmo-logo.svg";
import Button from "../buttons/Button";
import Navbar from "../Navbar";
import BurgerButtonIcon from "@/public/assets/burger-button-icon.svg";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="sticky top-0 left-0 flex justify-center bg-white w-screen px-40 max-[1120px]:px-20 py-5 z-10">
            <div className="flex justify-between items-center w-full">
                <SendmoLogo className="h-7" />
                <div className="w-1/2 max-[870px]:hidden">
                    <Navbar />
                </div>
                <div className="max-[950px]:hidden">
                    <Button text="Télécharger App" className="px-3 py-2" />
                </div>
                <div className="min-[950px]:hidden">
                    <button
                        className=""
                        onClick={() => setToggleMenu((prev) => !prev)}
                    >
                        <BurgerButtonIcon className="fill-black h-4" />
                    </button>

                    {toggleMenu && (
                        <div className="absolute right-0 top-full p-10 bg-white border bg-opacity-80 backdrop-blur">
                            <div className="min-[870px]:hidden">
                                <Navbar />
                            </div>
                            <Button
                                text="Télécharger App"
                                className="px-3 py-2"
                            />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
