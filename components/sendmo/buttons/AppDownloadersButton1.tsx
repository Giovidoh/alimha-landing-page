import React, { FC, ReactNode } from "react";

interface AppDownloadersButton1Props {
    text?: string;
    icon: ReactNode;
}

const AppDownloadersButton1: FC<AppDownloadersButton1Props> = ({
    text,
    icon,
}) => {
    return (
        <button className="flex items-center group p-3 gap-3 border-[2px] border-black hover:border-secondary-blue hover:text-secondary-blue hover:scale-105 rounded-lg capitalize transition">
            {icon}
            {text}
        </button>
    );
};

export default AppDownloadersButton1;
