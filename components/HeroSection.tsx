import React from "react";
import HeroImg from "./HeroImg";
import ButtonGradientStyle1 from "./ButtonGradientStyle1";
import ButtonStyle1 from "./ButtonStyle1";
import ClientsReviewsRate from "./ClientsReviewsRate";

const HeroSection = () => {
    return (
        <section className="flex px-[10%] bg-white h-screen w-full">
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
            <div className="w-1/2 ">
                <HeroImg />
            </div>
        </section>
    );
};

export default HeroSection;
