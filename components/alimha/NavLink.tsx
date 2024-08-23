import Link from "next/link";
import React from "react";

interface NavLinkProps {
    text?: string;
    href?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text = "NavLink", href = "#" }) => {
    return (
        <Link
            href={href}
            className="text-[#171717] font-semibold px-1 max-md:py-3 inline-block transition-transform hover:text-primary-blue hover:scale-105"
        >
            {text}
        </Link>
    );
};

export default NavLink;
