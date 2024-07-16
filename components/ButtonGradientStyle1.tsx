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
            className={`bg-gradient-to-r ${fromColor} ${toColor} to-secondary-blue font-bold capitalize tracking-wide whitespace-nowrap text-white w-[194px] h-[55px] rounded-xl`}
        >
            {text}
        </button>
    );
};

export default ButtonGradientStyle1;
