import React from "react";

interface FooterLinkProps {
    href?: string;
    text?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({
    href = "#",
    text = "FooterLink",
}) => {
    return (
        <a href={href} className="text-secondary-blue font-light">
            {text}
        </a>
    );
};

export default FooterLink;
