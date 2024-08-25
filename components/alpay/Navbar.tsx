"use client";
import React, { useEffect, useState } from "react";
import { headerLinks } from "@/data/alpay/headerLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        headerLinks.forEach(
            (link, index) => link.url == pathname && setActiveLink(index)
        );
    }, [pathname]);

    return (
        <nav className="w-full">
            <ul className="flex flex-col min-[870px]:flex-row justify-between items-center w-full gap-4 max-[870px]:pb-3">
                {headerLinks.map((link, index) => (
                    <li
                        key={index}
                        className={`${
                            activeLink == index
                                ? "text-secondary-blue scale-105"
                                : "hover:text-secondary-blue hover:scale-105 transition"
                        } list-none max-[1200px]:text-sm whitespace-nowrap`}
                        onClick={() => setActiveLink(index)}
                    >
                        <Link href={link.url}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
