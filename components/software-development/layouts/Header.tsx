"use client";
import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import logo from "@/public/assets/alimha-logo.png";
import Navbar from "../Navbar";
import Button1 from "../buttons/Button1";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const localActive = useLocale();
    const t = useTranslations();
    return (
        <header>
            <div>
                <Image src={logo} alt="alimha's logo" />
            </div>
            <div>
                <Navbar />
            </div>
            <div>
                <Button1 text="" />
            </div>
        </header>
    );
};

export default Header;
