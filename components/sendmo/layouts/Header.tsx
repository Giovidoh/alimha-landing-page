import React from "react";
import SendmoLogo from "@/public/assets/sendmo-logo.svg";
import { headerLinks } from "@/data/sendmo/headerLinks";
import Link from "next/link";
import Button from "../buttons/Button";
import Navbar from "../Navbar";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-40 py-5 bg-white">
            <SendmoLogo className="h-7" />
            <Navbar />
            <div>
                <Button text="Télécharger App" className="px-3 py-2" />
            </div>
        </header>
    );
};

export default Header;
