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
            className="resize-none bg-[#EDEDED] text-xl text-[#8E91B5] max-w-[465px] w-[465px] h-[214px] px-5 py-3 rounded-lg"
        ></textarea>
    );
};

export default TextArea;
