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
            className="bg-[#F8FAFC] text-xl text-[#8E91B5] border border-[#EDEDED] w-full px-5 py-3 rounded-lg outline-none"
        />
    );
};

export default Input;
