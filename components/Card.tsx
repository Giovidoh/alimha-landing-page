import React from "react";
import CardIcon from "./CardIcon";
import { StaticImageData } from "next/image";
import ButtonStyle2 from "./ButtonStyle2";

interface CardProps {
    icon: StaticImageData;
    bgColor: string;
    title?: string;
    titleColor?: string;
    description?: string;
    buttonBgColor?: string;
}

const Card: React.FC<CardProps> = ({
    icon,
    bgColor,
    title = "Card Title",
    titleColor = "#292D32",
    description = "Card Description",
    buttonBgColor,
}) => {
    return (
        <div className="flex flex-col justify-between items-start h-[400px] w-[357px] px-7 py-5 rounded-3xl shadow-2xl">
            <CardIcon icon={icon} bgColor={bgColor} />
            <h2
                className={`${titleColor} text-[28px] font-semibold leading-[36px]`}
            >
                {title}
            </h2>
            <p className="text-[#8E91B5] pb-5">{description}</p>
            <ButtonStyle2 text="En savoir plus" bgColor={buttonBgColor} />
        </div>
    );
};

export default Card;
