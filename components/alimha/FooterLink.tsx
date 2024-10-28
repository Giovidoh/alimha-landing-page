"use client";

import Link from "next/link";
import React from "react";

interface FooterLinkProps {
    href?: string;
    text?: string;
    id?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({
    href = "#",
    text = "FooterLink",
    id = "",
}) => {
    const scrollToSection = (e: any, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Link
            href={href}
            id={id}
            className="font-light text-pretty tracking-wide"
            onClick={(e) => scrollToSection(e, id)}
        >
            {text}
        </Link>
    );
};

export default FooterLink;
