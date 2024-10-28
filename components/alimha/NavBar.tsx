import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const [activeLink, setActiveLink] = useState<number>(-1);
    const pathname = usePathname();
    const localActive = useLocale();
    const t = useTranslations("AlimhaPage.Header");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const navbarLinks = [
        {
            href: `/${localActive}/alimha#our-services`,
            text: t("Solutions"),
            id: "our-services",
        },
        {
            href: `/${localActive}/alimha#about-us`,
            text: t("About us"),
            id: "about-us",
        },
        { href: `/${localActive}/alimha/career`, text: t("Career"), id: "" },
        {
            href: `/${localActive}/alimha#contact`,
            text: t("Contact"),
            id: "contact",
        },
    ];

    useEffect(() => {
        navbarLinks.forEach(
            (link, index) => pathname == link.href && setActiveLink(index)
        );
    }, [pathname, navbarLinks]);

    const scrollToSection = (e: any, id: string, index: number) => {
        e.preventDefault();
        setActiveLink(index);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <ul className="flex max-md:flex-col gap-5 min-[1135px]:gap-10 w-full max-w-[500px]">
            {navbarLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className={`${
                        activeLink == index && "text-primary-blue scale-105"
                    } text-[#171717] text-center px-1 inline-block transition-transform hover:text-primary-blue hover:scale-105`}
                    onClick={(e) => scrollToSection(e, link.id, index)}
                >
                    {link.text}
                </Link>
            ))}
        </ul>
    );
};

export default NavBar;
