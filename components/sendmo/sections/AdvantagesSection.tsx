/* eslint-disable react/jsx-key */
import React from "react";
import Badge from "../badges/Badge";
import IconTextCard from "../cards/IconTextCard";
import ThumbUpIcon from "@/public/assets/thumb-up-icon.svg";
import TimeIcon from "@/public/assets/time-icon.svg";
import AdvancedSecurityIcon from "@/public/assets/advanced-security-icon.svg";
import MultideviseFlexibilityIcon from "@/public/assets/multidevise-flexibility-icon.svg";
import Button from "../buttons/Button";
import Image from "next/image";
import blackManImage from "@/public/assets/black-man-image.png";
import StickGraphIcon from "@/public/assets/stick-graph-icon.svg";
import GraphIcon from "@/public/assets/graph-icon.svg";
import SvgIconsCollection from "../SvgIconsCollection";

const AdvantagesSection = () => {
    return (
        <section
            id="advantages_section"
            className="flex flex-col min-[1300px]:flex-row justify-between items-center bg-gray-50 w-full px-5 sm:px-20 min-[1120px]:px-40 pt-20 pb-28"
        >
            <div className="flex flex-col items-center min-[1300px]:items-start w-full min-[1300px]:w-1/2 gap-4">
                <div className="mb-5">
                    <Badge text="Avantages" />
                </div>
                <h1 className="text-2xl md:text-4xl text-center min-[1300px]:text-start leading-snug font-bold tracking-wide">
                    Tous les avantages de{" "}
                    <br className="hidden min-[1300px]:block" />
                    Sendmo
                </h1>
                <div className="flex flex-col gap-2 mb-3">
                    <div>
                        <IconTextCard
                            icon={<ThumbUpIcon />}
                            title="Facilité d'Utilisation"
                            body="Une Interface Intuitive et Conviviale. SendMo est conçue pour être facile à utiliser, même pour les novices en technologie."
                        />
                    </div>
                    <div>
                        <IconTextCard
                            icon={<TimeIcon />}
                            title="Économie de Temps"
                            body="Dépôts et Transferts Rapides. Réduisez les délais et les tracas administratifs avec notre système rapide et efficace."
                        />
                    </div>
                    <div>
                        <IconTextCard
                            icon={<AdvancedSecurityIcon />}
                            title="Sécurité Avancée"
                            body="Votre Argent, Notre Priorité. Des protocoles de sécurité rigoureux garantissent que vos transactions sont toujours protégées."
                        />
                    </div>
                    <div>
                        <IconTextCard
                            icon={<MultideviseFlexibilityIcon />}
                            title="Flexibilité Multidevise"
                            body="Gérez vos Finances en Toute Simplicité. Acceptez et transférez des fonds dans diverses devises locales sans effort."
                        />
                    </div>
                </div>
                <Button text="Télécharger App" className="px-7 py-4" />
            </div>
            <div className="hidden min-[1300px]:block relative w-1/2">
                <Image src={blackManImage} alt="black man image" />
                <div className="absolute top-0 right-14">
                    <SvgIconsCollection icons={[<StickGraphIcon />]} />
                </div>
                <div className="absolute -bottom-8 left-7">
                    <SvgIconsCollection icons={[<GraphIcon />]} />
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
