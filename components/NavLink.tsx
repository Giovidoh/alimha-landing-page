import React from "react";

const NavLink = ({ text, href }: { text: string; href: string }) => {
    return (
        <a id="ok" href={href} className="text-[#171717] font-semibold">
            {text}
        </a>
    );
};

export default NavLink;
