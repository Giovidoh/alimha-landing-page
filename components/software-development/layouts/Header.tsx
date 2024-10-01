"use client";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import logo from "@/public/assets/alimha-logo.png";
import Navbar from "../Navbar";
import Button1 from "../buttons/Button1";
import LocalSwitcherSelect from "../selects/LocalSwitcherSelect";
import BurgerButton from "@/public/assets/burger-button-icon.svg";
import { getLangDir } from "rtl-detect";
import { useRouter } from "next/navigation";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const localActive = useLocale();
    const direction = getLangDir(localActive);
    const t = useTranslations("SoftwareDevelopmentPage.Header");

    const router = useRouter();

    // Maintenance mode
    useEffect(() => {
        if (
            process.env.NEXT_PUBLIC_SOFTWARE_DEVELOPMENT_MAINTENANCE_MODE ===
            "true"
        ) {
            router.replace(`/${localActive}/software-development/maintenance`);
        }
    }, [localActive, router]);

    const handleToggleMenu = () => {
        setToggleMenu((prev) => !prev);
    };

    return (
        <header className="relative flex items-center justify-between px-[5%] min-[1200px]:px-[10%] pt-5 pb-2 z-50">
            <div>
                <Image src={logo} alt="alimha's logo" height={45} />
            </div>
            <div className="flex items-center gap-10">
                <div className="hidden md:block">
                    <Navbar />
                </div>
                <div className="hidden min-[950px]:flex items-center gap-3">
                    <div className="hidden min-[1070px]:block">
                        <LocalSwitcherSelect />
                    </div>
                    <div className="hidden min-[950px]:block">
                        <Button1 href="#" text={t("button text")} />
                    </div>
                </div>
            </div>

            <div className="block min-[1070px]:hidden">
                <button onClick={handleToggleMenu}>
                    <BurgerButton className="h-4" />
                </button>
                {toggleMenu && (
                    <div
                        className={`absolute top-full ${
                            direction == "rtl" ? "left-0" : "right-0"
                        } flex flex-col items-center bg-white bg-opacity-80 backdrop-blur p-10 gap-4 rounded-es-md rounded-ee-md `}
                    >
                        <div className="block md:hidden">
                            <Navbar className="flex flex-col" />
                        </div>
                        <div className="flex flex-col items-center w-full gap-3">
                            <div className="block min-[1070px]:hidden">
                                <LocalSwitcherSelect />
                            </div>
                            <div className="block min-[950px]:hidden w-full">
                                <Button1
                                    href="#"
                                    text={t("button text")}
                                    className="w-full"
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