import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface Button1Props {
    url?: string;
    text?: string;
    className?: string;
}

const Button1: FC<Button1Props> = ({
    url = "#",
    text = "Button1",
    className,
}) => {
    return (
        <Link
            href={url}
            className={cn(
                `flex justify-center items-center bg-primary-blue text-white tracking-wide px-5 py-3`,
                className
            )}
        >
            {text}
        </Link>
    );
};

export default Button1;
