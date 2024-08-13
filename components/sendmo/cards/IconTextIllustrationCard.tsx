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
            className={`flex flex-col items-start ${backgroundColor} w-full min-w-[450px] h-[320px] p-5 gap-4 rounded-3xl shadow-md`}
        >
            <div className="flex justify-center items-center p-5 bg-white rounded-2xl fill-secondary-blue">
                {icon}
            </div>
            <div className={`${foregroundColor}`}>
                <h2 className="text-xl font-bold">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className="font-light">{body}</p>
                    <Image
                        src={illustration}
                        alt="card illustration"
                        height={144}
                    />
                </div>
            </div>
        </div>
    );
};

export default IconTextIllustrationCard;
