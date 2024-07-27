import Image from "next/image";
import React from "react";
import ButtonGradientStyle1 from "../ButtonGradientStyle1";
import ButtonStyle1 from "../ButtonStyle1";
import ClientsReviewsRate from "../ClientsReviewsRate";
import actor1 from "@/public/images/actor1.png";
import plus2 from "@/public/images/plus-vector-2.png";
import circle5 from "@/public/images/circle-vector-5.png";

const HeroSection = () => {
    return (
        <section className="flex px-[10%] bg-white h-fit w-full pb-24 bg-hero-world-img bg-contain bg-no-repeat bg-top">
            <div className="w-1/2 pt-32">
                <h3 className="font-semibold text-xl text-primary-blue mb-2">
                    Fintech
                </h3>
                <h1 className="font-bold text-[54px] leading-[64.8px] pb-4">
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
                <div className="flex justify-between w-[70%] pb-8">
                    <ButtonGradientStyle1
                        fromColor="from-primary-blue"
                        toColor="to-secondary-blue"
                        text="Devenir partenaire"
                    />
                    <ButtonStyle1 text="En savoir Plus" />
                </div>
                <ClientsReviewsRate />
            </div>
            <div className="relative w-1/2">
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
