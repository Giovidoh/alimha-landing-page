import React from "react";

interface ButtonStyle1Props {
    text?: string;
}

const ButtonStyle1: React.FC<ButtonStyle1Props> = ({ text }) => {
    return (
        <button className="border border-primary-blue text-[#171717] font-semibold tracking-wide rounded-xl w-[194px] h-[55px]">
            {text}
        </button>
    );
};

export default ButtonStyle1;
