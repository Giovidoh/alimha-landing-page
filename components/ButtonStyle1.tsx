import React from "react";

interface ButtonStyle1Props {
    text?: string;
    width?: string;
    height?: string;
    marginLeft?: string;
    marginTop?: string;
}

const ButtonStyle1: React.FC<ButtonStyle1Props> = ({
    text,
    width = "w-[194px]",
    height = "h-[55px]",
    marginLeft = "ml-0",
    marginTop = "mt-0",
}) => {
    return (
        <button
            className={`border border-primary-blue bg-white text-[#171717] font-semibold tracking-wide rounded-xl ${width} ${height} ${marginLeft} ${marginTop}`}
        >
            {text}
        </button>
    );
};

export default ButtonStyle1;
