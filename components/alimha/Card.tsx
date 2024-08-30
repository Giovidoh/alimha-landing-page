import React from "react";
import CardIcon from "./CardIcon";
import { StaticImageData } from "next/image";
import ButtonStyle2 from "./buttons/ButtonStyle2";
import { useTranslations } from "next-intl";

interface CardProps {
    icon: StaticImageData;
    bgColor: string;
    href?: string;
    title?: string;
    titleColor?: string;
    description?: string;
    buttonBgColor?: string;
}

const Card: React.FC<CardProps> = ({
    icon,
    bgColor,
    href,
    title = "Card Title",
    titleColor = "#292D32",
    description = "Card Description",
    buttonBgColor,
}) => {
    const t = useTranslations("AlimhaPage");
    return (
        <div className="flex flex-col justify-around items-start w-full h-[430px] px-7 py-5 rounded-3xl shadow-xl md:shadow-2xl bg-white z-10">
            <CardIcon icon={icon} bgColor={bgColor} />
            <h2 className={`${titleColor} text-2xl font-semibold`}>{title}</h2>
            <p className="text-[#333333] text-[16px] pb-5 text-justify">
                {description}
            </p>
            <ButtonStyle2
                href={href}
                text={t("Learn more")}
                bgColor={buttonBgColor}
            />
        </div>
    );
};

export default Card;
