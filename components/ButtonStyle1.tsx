import React from "react";

interface ButtonStyle1Props {
    text?: string;
}

const ButtonStyle1: React.FC<ButtonStyle1Props> = ({ text }) => {
    return (
        <button className="border border-primary-blue text-[#171717] font-semibold tracking-wide rounded-xl py-3 px-12">
            {text}
        </button>
    );
};

export default ButtonStyle1;
