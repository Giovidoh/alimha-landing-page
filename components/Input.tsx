import React from "react";

interface InputProps {
    type?: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({
    type = "text",
    placeholder = "placeholder",
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="bg-[#EDEDED] text-xl text-[#8E91B5] max-w-[465px] w-[465px] px-5 py-3 rounded-lg"
        />
    );
};

export default Input;
