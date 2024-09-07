"use client";
import React, { useState } from "react";
import AlpayLogo from "@/public/assets/alpay-logo.svg";
import Navbar from "@/components/alpay/Navbar";
import Button from "../buttons/Button";
import BurgerButtonIcon from "@/public/assets/burger-button-icon.svg";
import Link from "next/link";
import LocalSwitcherSelect from "../selects/LocalSwitcherSelect";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="sticky top-0 left-0 flex justify-center bg-white w-screen px-5 sm:px-20 min-[1330px]:px-40 py-5 z-50">
            <div className="flex justify-between items-center w-full">
                <AlpayLogo />
                <div className="w-1/2 max-[1000px]:hidden">
                    <Navbar />
                </div>
                <div className="hidden min-[1070px]:flex min-[1070px]:ml-16 gap-4">
                    {/* <Button
                        text="Contactez-nous"
                        className="bg-primary-blue text-white px-3 py-2"
                    /> */}
                    <div className="hidden min-[1440px]:block">
                        <LocalSwitcherSelect />
                    </div>
                    <button className="hover:scale-105 rounded-md transition bg-primary-blue text-white px-3 py-2">
                        <Link href="#contact-us">Contactez-nous</Link>
                    </button>
                </div>
                <div className="flex items-center min-[1440px]:hidden">
                    <button
                        className=""
                        onClick={() => setToggleMenu((prev) => !prev)}
                    >
                        <BurgerButtonIcon className="fill-black h-4" />
                    </button>

                    {toggleMenu && (
                        <div className="absolute right-0 top-full flex flex-col bg-white bg-opacity-80 p-10 gap-3 border backdrop-blur">
                            <div className="min-[1000px]:hidden">
                                <Navbar />
                            </div>
                            {/* <Button
                                href=""
                                text="Contactez-nous"
                                className="bg-primary-blue text-white px-3 py-2"
                            /> */}
                            <div className="block min-[1440px]:hidden">
                                <LocalSwitcherSelect />
                            </div>
                            <button className="block min-[1070px]:hidden hover:scale-105 rounded-md transition bg-primary-blue text-white px-3 py-2">
                                <Link href="#contact-us">Contactez-nous</Link>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
