import React from "react";

const NavLink = ({
    text = "NavLink",
    href = "#",
}: {
    text: string;
    href: string;
}) => {
    return (
        <a
            id="ok"
            href={href}
            className="text-[#171717] font-semibold px-1 inline-block transition-transform hover:text-primary-blue hover:scale-105"
        >
            {text}
        </a>
    );
};

export default NavLink;
