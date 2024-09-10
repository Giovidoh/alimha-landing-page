"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import frFlag from "@/public/assets/fr-flag.png";
import usFlag from "@/public/assets/us-flag.png";
import ChevronDownOutline from "@/public/assets/chevron-down-outline.svg";
import { animate, motion } from "framer-motion";

const LocalSwitcherSelect = () => {
    const router = useRouter();
    const localActive = useLocale();
    const [toggleLocalSwitcher, setToggleLocalSwitcher] = useState(false);

    const handleChangeLanguage = () => {
        if (localActive == "en") {
            router.replace(`/fr/sendmo`);
        } else {
            router.replace(`/en/sendmo`);
        }
    };

    return (
        <>
            <div
                className="relative w-[170px] select-none cursor-pointer z-0"
                onClick={() => setToggleLocalSwitcher((prev) => !prev)}
            >
                <div className="flex justify-between items-center bg-white w-full px-3 py-2 gap-2 border-[2px] border-secondary-blue rounded-md shadow-lg">
                    {localActive == "en" ? (
                        <>
                            <Image
                                src={usFlag}
                                alt="selected flag"
                                height={15}
                                className="pointer-events-none"
                            />
                            <span className="font-semibold">English</span>
                        </>
                    ) : (
                        <>
                            <Image
                                src={frFlag}
                                alt="selected flag"
                                height={20}
                                className="pointer-events-none"
                            />
                            <span className="font-semibold">Français</span>
                        </>
                    )}
                    <motion.div
                        animate={{ rotate: toggleLocalSwitcher ? 180 : 0 }}
                    >
                        <ChevronDownOutline className="h-5" />
                    </motion.div>
                </div>

                <div
                    className={`${
                        !toggleLocalSwitcher && "hidden"
                    } absolute top-[105%] left-0 bg-white w-full px-3 py-3 border-[1px] border-t-0 border-secondary-blue rounded-bl-md rounded-br-md select-none cursor-pointer -z-10`}
                    onClick={handleChangeLanguage}
                >
                    <div className="flex items-center gap-3">
                        {localActive == "en" ? (
                            <>
                                <Image
                                    src={frFlag}
                                    alt="french flag"
                                    height={20}
                                    className="pointer-events-none"
                                />
                                <span className="font-semibold">Français</span>
                            </>
                        ) : (
                            <>
                                <Image
                                    src={usFlag}
                                    alt="usa flag"
                                    height={15}
                                    className="pointer-events-none"
                                />
                                <span className="font-semibold">English</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocalSwitcherSelect;
