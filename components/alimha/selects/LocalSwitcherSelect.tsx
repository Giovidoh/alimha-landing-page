"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTransition } from "react";
import { ChangeEvent } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import frFlag from "@/public/assets/fr-flag.png";
import usFlag from "@/public/assets/us-flag.png";
import ChevronDownOutline from "@/public/assets/chevron-down-outline.svg";

const LocalSwitcherSelect = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const [toggleLocalSwitcher, setToggleLocalSwitcher] = useState(false);
    const [selectedFlag, setSelectedFlag] = useState(usFlag);
    const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH");

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => router.replace(`/${nextLocale}/alimha`));
    };

    const handleChangeLanguage = () => {
        if (localActive == "en") {
            setSelectedFlag(frFlag);
            setSelectedLanguage("FRANÇAIS");
            router.replace(`/fr/alimha`);
        } else {
            setSelectedFlag(usFlag);
            setSelectedLanguage("ENGLISH");
            router.replace(`/en/alimha`);
        }
    };

    return (
        <>
            {/* <select
                defaultValue={localActive}
                className="p-3 outline-none border-[2px] border-primary-blue rounded-full font-semibold text-xs cursor-pointer"
                onChange={onSelectChange}
                disabled={isPending}
            >
                <Image src={frFlag} alt="France flag" />
                <option value="en" className="font-semibold">
                    ENGLISH
                </option>
                <Image src={usFlag} alt="USA flag" />
                <option value="fr" className="font-semibold">
                    FRANÇAIS
                </option>
            </select> */}
            <div
                className="relative bg-white select-none cursor-pointer z-0"
                onClick={() => setToggleLocalSwitcher((prev) => !prev)}
            >
                {localActive == "en" ? (
                    <div className="flex items-center w-[170px] px-3 py-2 gap-2 border-[2px] border-primary-blue rounded-xl shadow-lg">
                        <Image
                            src={usFlag}
                            alt="selected flag"
                            height={15}
                            className="pointer-events-none"
                        />
                        <span className="font-semibold">ENGLISH</span>
                        <ChevronDownOutline className="h-5" />
                    </div>
                ) : (
                    <div className="flex items-center px-3 py-2 gap-2 border-[2px] border-primary-blue rounded-xl shadow-lg">
                        <Image
                            src={frFlag}
                            alt="selected flag"
                            height={20}
                            className="pointer-events-none"
                        />
                        <span className="font-semibold">FRANÇAIS</span>
                        <ChevronDownOutline className="h-5" />
                    </div>
                )}

                <div
                    className={`${
                        !toggleLocalSwitcher && "hidden"
                    } absolute top-[105%] left-0 bg-white w-full px-3 py-3 border-[1px] border-t-0 border-primary-blue rounded-bl-xl rounded-br-xl select-none cursor-pointer -z-10`}
                    onClick={handleChangeLanguage}
                >
                    {localActive == "en" ? (
                        <div className="flex items-center gap-3">
                            <Image
                                src={frFlag}
                                alt="french flag"
                                height={20}
                                className="pointer-events-none"
                            />
                            <span className="font-semibold">FRANÇAIS</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Image
                                src={usFlag}
                                alt="usa flag"
                                height={15}
                                className="pointer-events-none"
                            />
                            <span className="font-semibold">ENGLISH</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default LocalSwitcherSelect;
