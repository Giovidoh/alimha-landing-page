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
            className={`border ${bgColor} text-white capitalize font-bold tracking-wide rounded-xl w-[194px] h-[55px]`}
        >
            {text}
        </button>
    );
};

export default ButtonStyle2;
