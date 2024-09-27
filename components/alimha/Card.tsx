import React, { ReactNode } from "react";
import CardIcon from "./CardIcon";
import ButtonStyle2 from "./buttons/ButtonStyle2";

interface CardProps {
    icon: ReactNode;
    bgColor?: string;
    href?: string;
    title?: any;
    titleColor?: string;
    description?: string;
    buttonText?: string;
    buttonBgColor?: string;
    highlighted?: boolean;
}

const Card: React.FC<CardProps> = ({
    icon,
    bgColor,
    href,
    title = "Card Title",
    titleColor = "#292D32",
    description = "Card Description",
    buttonText = "Button",
    buttonBgColor,
    highlighted = false,
}) => {
    return (
        <div
            className={`flex flex-col items-start ${
                highlighted ? "bg-primary-blue text-white" : "bg-white"
            } w-full h-fit gap-4 px-7 py-8 rounded-3xl shadow-xl md:shadow-2xl z-10`}
        >
            <CardIcon
                icon={icon}
                bgColor={highlighted ? "bg-white" : bgColor}
            />
            <h2
                className={`${titleColor} text-xl lg:text-2xl min-[1200px]:text-3xl font-semibold`}
            >
                {title}
            </h2>
            <p
                className={`${
                    highlighted ? "text-white" : "text-[#333333]"
                } font-light text-sm lg:text-base min-[1200px]:text-lg text-pretty tracking-wide pb-3`}
            >
                {description}
            </p>
            <ButtonStyle2
                href={href}
                text={buttonText}
                bgColor={buttonBgColor}
            />
        </div>
    );
};

export default Card;
