import React from "react";

interface TextAreaProps {
    placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ placeholder = "placeholder" }) => {
    return (
        <textarea
            name=""
            id=""
            placeholder={placeholder}
            className="resize-none bg-[#F8FAFC] sm:text-xl text-[#8E91B5] border border-[#EDEDED] w-full h-[110px] sm:h-[214px] px-5 py-2 sm:py-3 rounded-lg outline-none"
        ></textarea>
    );
};

export default TextArea;
