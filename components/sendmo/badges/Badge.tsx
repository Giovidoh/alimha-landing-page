import React, { FC } from "react";

interface BadgeProps {
    text?: string;
}

const Badge: FC<BadgeProps> = ({ text = "Badge" }) => {
    return (
        <div className="inline px-3 py-2 bg-tertiary text-secondary-blue text-sm rounded-md tracking-wider">
            {text}
        </div>
    );
};

export default Badge;
