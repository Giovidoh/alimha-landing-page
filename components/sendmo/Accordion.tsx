import React, { FC } from "react";
import PlusIcon from "@/public/assets/plus-icon.svg";
import MinusIcon from "@/public/assets/minus-icon.svg";

interface AccordionProps {
    title?: string;
    body?: string;
    active?: boolean;
}

const Accordion: FC<AccordionProps> = ({ title, body, active = false }) => {
    return (
        <div
            className={`${
                active
                    ? "bg-secondary-blue px-14 py-5 w-full border border-secondary-blue rounded-xl"
                    : "px-14 py-5 w-full border border-secondary-blue rounded-xl shadow-lg"
            } `}
        >
            <div className="flex justify-between items-center">
                <h2
                    className={`text-xl font-bold ${
                        active ? "text-white" : "text-black"
                    }`}
                >
                    {title}
                </h2>
                <button>{active ? <MinusIcon /> : <PlusIcon />}</button>
            </div>
            {active && <div className="font-extralight text-white">{body}</div>}
        </div>
    );
};

export default Accordion;
