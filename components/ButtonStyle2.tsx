import React from "react";

interface ButtonStyle2Props {
    text?: string;
}

const ButtonStyle2: React.FC<ButtonStyle2Props> = ({ text }) => {
    return (
        <button className="border border-primary-blue text-[#171717] font-semibold tracking-wide rounded-xl py-3 px-12">
            {text}
        </button>
    );
};

export default ButtonStyle2;
