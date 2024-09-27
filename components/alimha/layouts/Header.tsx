"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import NavBar from "../NavBar";
import BurgerButton from "../buttons/BurgerButton";
import ButtonGradientStyle1 from "../buttons/ButtonGradientStyle1";
import LocalSwitcherSelect from "../selects/LocalSwitcherSelect";
import { useLocale, useTranslations } from "next-intl";
import {
    motion,
    progress,
    scroll,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";

const Header = () => {
    const [burgerDropped, setBurgerDropped] = useState(false);
    const t = useTranslations("AlimhaPage.Header");
    const localActive = useLocale();

    const [background, setBackground] = useState<string>("");
    const [firstAnimationComplete, setfirstAnimationComplete] =
        useState<boolean>(false);

    scroll(
        (progress) =>
            progress > 0 ? setBackground("white") : setBackground(""),
        {
            source: document.body,
        }
    );

    return (
        <motion.header
            initial={{ paddingTop: 8, y: "-100%" }}
            animate={{ paddingTop: background ? 8 : 30, y: 0 }}
            transition={{
                ease: "easeIn",
                duration: 0.3,
                delay: firstAnimationComplete ? 0 : 1,
            }}
            onAnimationComplete={() => setfirstAnimationComplete(true)}
            className={`fixed flex justify-between ${
                background ? "bg-white bg-opacity-80 backdrop-blur-md" : ""
            } w-full gap-4 lg:px-[10%] max-lg:px-[5%] py-2 z-50 transition`}
        >
            <div className="flex justify-between items-center">
                <Logo />
            </div>
            <div className="flex gap-10">
                <nav
                    className="max-md:hidden flex justify-center items-center"
                    role="navigation"
                >
                    <NavBar />
                </nav>
                <div className="hidden min-[950px]:flex items-center gap-3">
                    <div className="hidden min-[1200px]:block w-1/2">
                        <LocalSwitcherSelect />
                    </div>
                    <div className="block w-1/2">
                        <ButtonGradientStyle1
                            fromColor="from-primary-blue"
                            toColor="to-primary-blue"
                            text={t("Become partner")}
                        />
                    </div>
                </div>
                <div className="flex min-[1200px]:hidden justify-end items-center">
                    <BurgerButton setBurgerDropped={setBurgerDropped} />
                    {burgerDropped && (
                        <div
                            className={`absolute ${
                                localActive == "ar" ? "left-0" : "right-0"
                            } top-full flex flex-col gap-4 p-10 bg-white bg-opacity-80 backdrop-blur`}
                        >
                            <nav className="block md:hidden" role="navigation">
                                <NavBar />
                            </nav>
                            <div className="block min-[1200px]:hidden">
                                <LocalSwitcherSelect />
                            </div>
                            <div className="flex min-[950px]:hidden">
                                <ButtonGradientStyle1
                                    fromColor="from-primary-blue"
                                    toColor="to-primary-blue"
                                    text={t("Become partner")}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
