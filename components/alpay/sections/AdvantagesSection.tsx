import React from "react";
import LeftIconTextCard from "../cards/LeftIconTextCard";
import PercentageIcon from "@/public/assets/percentage-icon.svg";
import GraphicIcon from "@/public/assets/graphic-icon.svg";
import Support247 from "@/public/assets/support-24-7-icon.svg";
import Image from "next/image";
import unsplashPhoneComputerImage from "@/public/assets/unsplash-phone-computer.png";
import computerImage from "@/public/assets/computer.png";
import dotVector1 from "@/public/assets/dot-vector-1.png";

const AdvantagesSection = () => {
    return (
        <section className="flex items-end bg-alpay-advantages-bg bg-cover bg-no-repeat bg-center w-full  py-24 px-5 sm:px-20 min-[1120px]:px-40 gap-3">
            <div className="relative flex flex-col w-1/2 gap-4">
                <span className="font-medium text-lg text-primary-blue">
                    Avantages
                </span>
                <h1 className="font-bold text-4xl">
                    Les Avantages de Notre Agrégateur
                </h1>
                <p className="text-sm text-[#292D32] mt-2 mb-5">
                    Notre Agrégateur offre plusieurs avantages dont :
                </p>
                <div className="flex flex-col gap-8">
                    <LeftIconTextCard
                        icon={<PercentageIcon />}
                        title="Réduction des Frais de Transaction"
                        body="Minimisez vos coûts grâce à des tarifs compétitifs et une gestion centralisée des frais de traitement."
                    />
                    <LeftIconTextCard
                        icon={<GraphicIcon />}
                        title="Rapports et Analyses Détaillées"
                        body="Minimisez vos coûts grâce à des tarifs compétitifs et une gestion centralisée des frais de traitement."
                    />
                    <LeftIconTextCard
                        icon={<Support247 />}
                        title="Support 24/7"
                        body="Minimisez vos coûts grâce à des tarifs compétitifs et une gestion centralisée des frais de traitement."
                    />
                </div>
            </div>
            <div className="relative w-1/2">
                <div className="absolute bottom-0">
                    <Image
                        src={unsplashPhoneComputerImage}
                        alt="phone computer image"
                        height={485}
                    />
                </div>
                <div className="absolute -bottom-14 right-5">
                    <Image
                        src={computerImage}
                        alt="computer image"
                        height={287}
                    />
                </div>
                <div className="absolute right-28 -top-96">
                    <Image
                        src={dotVector1}
                        alt="dot vector image"
                        height={137}
                    />
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
