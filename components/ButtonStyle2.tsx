import React from "react";

interface ButtonStyle2Props {
    bgColor?: string;
    text?: string;
}

const ButtonStyle2: React.FC<ButtonStyle2Props> = ({
    bgColor = "bg-primary-blue",
    text = "Button",
}) => {
    return (
        <button
            className={`border ${bgColor} text-white font-bold tracking-wide rounded-xl py-3 px-12`}
        >
            {text}
        </button>
    );
};

export default ButtonStyle2;
