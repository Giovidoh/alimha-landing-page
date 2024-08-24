import React from "react";
import IconTextCard from "../cards/IconTextCard";
import PersonInscriptionIcon from "@/public/assets/person-inscription-icon.svg";
import GearIcon from "@/public/assets/gear-icon.svg";
import TransactionIcon from "@/public/assets/transaction-icon.svg";
import Image from "next/image";
import dotVector2 from "@/public/assets/dot-vector-2.png";
import bluredVectors from "@/public/assets/blured-vectors.png";

const HowItWorksSection = () => {
    return (
        <section className="relative flex flex-col items-center w-full bg-primary-blue bg-alpay-how-it-works-bg bg-cover bg-no-repeat bg-center pt-28 pb-32 px-5 sm:px-20 min-[1120px]:px-40 gap-3">
            <div className="absolute top-10 left-[10%]">
                <Image src={dotVector2} alt="dot vector image" height={137} />
            </div>
            <div className="absolute top-16 right-[10%]">
                <Image
                    src={bluredVectors}
                    alt="dot vector image"
                    height={100}
                />
            </div>
            <span className="font-medium text-lg text-white">
                Fonctionnement
            </span>
            <h1 className="font-bold text-4xl text-white mb-16">
                Comment Ça Marche
            </h1>
            <div className="grid grid-cols-3 w-full">
                <div className="w-[320px]">
                    <IconTextCard
                        icon={<PersonInscriptionIcon />}
                        title="Inscription Facile"
                        body="Créez votre compte en quelques minutes et commencez à configurer vos options de paiement selon vos besoins spécifiques."
                    />
                </div>
                <div className="w-[320px]">
                    <IconTextCard
                        icon={<GearIcon />}
                        title="Configuration Rapide"
                        body="Utilisez nos guides et notre support pour intégrer facilement l’agrégateur à vos systèmes existants. Pas de développement complexe nécessaire."
                    />
                </div>
                <div className="w-[320px]">
                    <IconTextCard
                        icon={<TransactionIcon />}
                        title="Lancez Vos Transactions"
                        body="Commencez à accepter des    paiements de manière fluide et sécurisée, et visualisez vos   transactions en temps réel depuis votre tableau de bord."
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
