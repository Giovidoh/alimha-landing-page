import React from "react";

interface ButtonGradientStyle1Props {
    fromColor?: string;
    toColor?: string;
    text?: string;
}

const ButtonGradientStyle1: React.FC<ButtonGradientStyle1Props> = ({
    fromColor = "from-primary-blue",
    toColor = "to-secondary-blue",
    text = "Button",
}) => {
    return (
        <button
            className={`bg-gradient-to-r ${fromColor} ${toColor} to-secondary-blue font-bold capitalize tracking-wide whitespace-nowrap text-white rounded-xl py-3 px-6`}
        >
            {text}
        </button>
    );
};

export default ButtonGradientStyle1;
