import React from "react";
import SendmoLogo from "@/public/assets/sendmo-logo.svg";
import { headerLinks } from "@/data/sendmo/headerLinks";
import Link from "next/link";
import Button from "../buttons/Button";
import Navbar from "../Navbar";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-40 py-5 bg-white">
            <SendmoLogo />
            <Navbar />
            <div>
                <Button text="Télécharger App" />
            </div>
        </header>
    );
};

export default Header;
