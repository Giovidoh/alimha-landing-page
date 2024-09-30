import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState<number>(-1);
    const pathname = usePathname();
    const localActive = useLocale();
    const t = useTranslations("SoftwareDevelopmentPage.Header");

    const navbarLinks = [
        { href: `/${localActive}/software-development`, text: t("link1") },
        {
            href: `/${localActive}/software-development#our-services`,
            text: t("link2"),
        },
        {
            href: `/${localActive}/software-development/our-realisations`,
            text: t("link3"),
        },
        {
            href: `/${localActive}/software-development#equip`,
            text: t("link4"),
        },
        {
            href: `/${localActive}/software-development#contact`,
            text: t("link5"),
        },
        { href: `/${localActive}/software-development#faq`, text: t("link6") },
    ];

    return <nav></nav>;
};

export default Navbar;
