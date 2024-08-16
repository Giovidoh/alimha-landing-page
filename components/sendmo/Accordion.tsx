"use client";
import React, { FC, useState } from "react";
import PlusIcon from "@/public/assets/plus-icon.svg";
import MinusIcon from "@/public/assets/minus-icon.svg";

interface AccordionProps {
    title?: string;
    body?: string;
}

const Accordion: FC<AccordionProps> = ({ title, body }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={`${
                open
                    ? " bg-secondary-blue px-14 py-5 w-full h-fit border border-secondary-blue rounded-xl transition-transform"
                    : "w-full h-[80px] px-14 border py-5 border-secondary-blue rounded-xl shadow-lg"
            }`}
        >
            <button
                className="flex justify-between items-center w-full h-full"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span
                    className={`text-xl text-start font-bold max-w-[70%] ${
                        open ? "text-white" : "text-black"
                    }`}
                >
                    {title}
                </span>

                {open ? <MinusIcon /> : <PlusIcon />}
            </button>

            <div
                className={`grid pt-2 transition-all duration-300 ease-in-out font-extralight text-white ${
                    open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <p className="overflow-hidden">{body}</p>
            </div>
        </div>
    );
};

export default Accordion;
