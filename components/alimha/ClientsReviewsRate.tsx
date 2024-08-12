import React from "react";
import Star from "./Star";

const ClientsReviewsRate = () => {
    return (
        <div className="flex flex-col items-center justify-between w-full h-14 md:w-fit">
            <div className="flex justify-evenly w-full">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <div>
                <span className="font-bold">(+100) </span>
                <span className="text-gray-1 font-medium">
                    Avis des clients
                </span>
            </div>
        </div>
    );
};

export default ClientsReviewsRate;
