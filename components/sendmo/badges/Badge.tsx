import React, { FC } from "react";

interface BadgeProps {
    text?: string;
    px?: string;
}

const Badge: FC<BadgeProps> = ({ text = "Badge", px = "px-3" }) => {
    return (
        <div
            className={`inline ${px} py-2 bg-tertiary text-secondary-blue text-sm rounded-md tracking-wider`}
        >
            {text}
        </div>
    );
};

export default Badge;
