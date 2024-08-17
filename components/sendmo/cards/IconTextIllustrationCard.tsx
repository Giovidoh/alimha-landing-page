import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";

interface IconTextIllustrationCardProps {
    backgroundColor?: string;
    foregroundColor?: string;
    icon: ReactNode;
    title: string;
    body: string;
    illustration: StaticImageData;
}

const IconTextIllustrationCard: FC<IconTextIllustrationCardProps> = ({
    backgroundColor = "bg-secondary-blue",
    foregroundColor = "text-white",
    icon,
    title,
    body,
    illustration,
}) => {
    return (
        <div
            className={`flex flex-col items-start ${backgroundColor} w-full p-5 gap-4 rounded-3xl shadow-md`}
        >
            <div className="flex justify-center items-center p-5 bg-white rounded-2xl fill-secondary-blue">
                {icon}
            </div>
            <div className={`relative ${foregroundColor}`}>
                <h2 className="relative text-xl font-bold z-10">{title}</h2>
                <div className="flex justify-between items-center">
                    <p
                        className={`text-pretty font-light pt-2 w-full md:w-3/4 z-10`}
                    >
                        {body}
                    </p>
                    <Image
                        src={illustration}
                        alt="card illustration"
                        height={144}
                        className="hidden md:block absolute bottom-0 right-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default IconTextIllustrationCard;
