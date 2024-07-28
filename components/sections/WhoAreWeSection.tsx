import Image from "next/image";
import React from "react";
import ButtonGradientStyle1 from "../ButtonGradientStyle1";
import actor2 from "@/public/images/actor2.png";
import growth1 from "@/public/images/growth1.png";
import growth2 from "@/public/images/growth2.png";
import circle_vector1 from "@/public/images/circle-vector-1.png";
import circle_vector2 from "@/public/images/circle-vector-2.png";
import plus_vector1 from "@/public/images/plus-vector-1.png";
import plus_vector2 from "@/public/images/plus-vector-2.png";
import dash_vector1 from "@/public/images/dash-vector-1.png";
import thumb_up from "@/public/images/thumb-up.png";

const WhoAreWeSection = () => {
    return (
        <section className="relative flex items-center px-[10%] bg-[#DDECFF] bg-who-are-we-bg bg-cover bg-no-repeat h-[850px] w-full">
            <Image
                src={circle_vector1}
                alt="circle vector"
                height={80}
                className="absolute top-14 right-40"
            />
            <Image
                src={circle_vector2}
                alt="circle vector"
                height={25}
                className="absolute top-60 left-72"
            />
            <Image
                src={plus_vector1}
                alt="circle vector"
                height={15}
                className="absolute top-32 left-1/3"
            />
            <Image
                src={plus_vector2}
                alt="circle vector"
                height={20}
                className="absolute bottom-32 left-1/3"
            />
            <Image
                src={dash_vector1}
                alt="dash vector"
                width={20}
                className="absolute top-80 left-48"
            />
            <div className="absolute bottom-40 left-56 p-3 bg-white shadow-md rounded-lg">
                <Image src={growth1} alt="circle vector" height={60} />
            </div>
            <div className="absolute flex items-center top-56 left-[560px] px-3 py-1 bg-[#19AFFF] shadow-md rounded-lg">
                <div className="bg-[#70CDFF] p-1 mr-2 rounded-lg">
                    <Image src={thumb_up} alt="thumb up" height={30} />
                </div>
                <span className="text-white text-[32px] font-medium">200</span>
            </div>

            <div>
                <Image src={actor2} alt="actor2 image" height={2000} />
            </div>
            <div className="flex flex-col justify-between h-[400px] pl-28">
                <div className="flex items-center h-fit">
                    <h3 className="font-semibold text-xl text-primary-blue pt-4 pr-6">
                        Qui sommes-nous ?
                    </h3>
                    <Image src={growth2} alt="growth icon" height={50} />
                </div>
                <div className="mb-6">
                    <h1 className="font-bold text-[44px] leading-[52.6px] pb-10">
                        Votre partenaire de <br /> croissance
                    </h1>
                    <p className="text-base text-[#8E91B5]">
                        Alimha and Company est une fintech innovante dédiée à
                        fournir des solutions de paiement modernes et efficaces.
                        Notre mission est de simplifier les transactions
                        financières à travers la région, en offrant des services
                        fiables, sécurisés et accessibles à tous.
                    </p>
                </div>
                <ButtonGradientStyle1 text="En savoir plus" />
            </div>
        </section>
    );
};

export default WhoAreWeSection;
