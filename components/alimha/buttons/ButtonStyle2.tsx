import Link from "next/link";
import React from "react";

interface ButtonStyle2Props {
    bgColor?: string;
    href?: string;
    text?: string;
}

const ButtonStyle2: React.FC<ButtonStyle2Props> = ({
    bgColor = "bg-primary-blue",
    href = "#",
    text = "Button",
}) => {
    return (
        <Link
            href={href}
            className={`flex justify-center items-center border ${bgColor} text-white hover:scale-105 capitalize font-bold tracking-wide rounded-xl w-[194px] h-[55px] transition ease-in`}
        >
            {text}
        </Link>
    );
};

export default ButtonStyle2;
