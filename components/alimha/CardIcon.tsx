import React from "react";
import Image, { StaticImageData } from "next/image";

interface cardIconProps {
    icon: StaticImageData;
    bgColor: string;
}

const CardIcon: React.FC<cardIconProps> = ({ icon, bgColor }) => {
    return (
        <div
            className={`${bgColor} flex justify-center items-center h-[88px] w-[88px] p-2 rounded-[28px]`}
        >
            <Image src={icon} alt="icon" height={40} width={40} />
        </div>
    );
};

export default CardIcon;
