import Image from "next/image";
import React from "react";
import ButtonGradientStyle1 from "../buttons/ButtonGradientStyle1";
import ButtonStyle1 from "../buttons/ButtonStyle1";
import ClientsReviewsRate from "../ClientsReviewsRate";
import actor1 from "@/public/images/actor1.png";
import plus2 from "@/public/images/plus-vector-2.png";
import circle5 from "@/public/images/circle-vector-5.png";

const HeroSection = () => {
    return (
        <section className="flex bg-white h-fit w-full px-[5%] lg:px-[10%] pb-24 bg-hero-world-img bg-contain bg-no-repeat bg-top">
            <div className="w-full md:w-1/2 text-center md:text-left pt-10 md:pt-16 lg:pt-32">
                <h3 className="font-semibold text-lg md:text-xl text-primary-blue mb-2">
                    Fintech
                </h3>
                <h1 className="font-bold text-[32px] lg:text-[54px] leading-[50px] lg:leading-[64.8px] pb-4">
                    Bienvenue chez <br />
                    <span className="text-primary-blue">
                        Alimha and Company
                    </span>
                </h1>
                <p className="text-[#1E1E1E] pb-8">
                    Votre Partenaire de Confiance en Solutions Technologiques
                    Transformez vos idées en réalités innovantes Nous combinons
                    expertise, créativité et technologie de pointe pour
                    transformer vos visions en solutions concrètes.
                </p>
                <div className="flex flex-col md:flex-row justify-between w-full pb-8">
                    <ButtonGradientStyle1
                        fromColor="from-primary-blue"
                        toColor="to-secondary-blue"
                        text="Devenir partenaire"
                        width="w-full md:w-1/2"
                        marginRight="md:mr-2"
                    />
                    <ButtonStyle1
                        text="En savoir Plus"
                        width="w-full md:w-1/2"
                        marginLeft="md:ml-2"
                        marginTop="mt-3 md:mt-0"
                    />
                </div>
                <ClientsReviewsRate />
            </div>
            <div className="hidden md:block md:relative md:w-1/2">
                <Image
                    src={actor1}
                    alt="hero actor image"
                    className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
                />
                <Image
                    src={plus2}
                    alt="plus icon"
                    height={30}
                    width={30}
                    className="absolute top-[190px] right-[80px] z-0"
                />
                <Image
                    src={circle5}
                    alt="circle icon"
                    height={30}
                    width={30}
                    className="absolute bottom-[20px] right-[275px] z-0"
                />
            </div>
        </section>
    );
};

export default HeroSection;
