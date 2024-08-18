/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Badge from "../badges/Badge";
import ImageTextIconCard from "../cards/ImageTextIconCard";
import senegalFlag from "@/public/assets/senegal.png";
import togoFlag from "@/public/assets/togo.png";
import guineaFlag from "@/public/assets/guinee.png";
import djiboutiFlag from "@/public/assets/djibouti.png";
import centraficanRepublicFlag from "@/public/assets/republique-centrafricaine.png";
import DropdownIcon from "@/public/assets/dropdown-icon.svg";

const countriesImages = [
    {
        src: senegalFlag,
        alt: "senegal flag image",
        name: "Sénégal",
    },
    {
        src: togoFlag,
        alt: "togo flag image",
        name: "Togo",
    },
    {
        src: guineaFlag,
        alt: "guinea flag image",
        name: "Guinée",
    },
    {
        src: djiboutiFlag,
        alt: "djibouti flag image",
        name: "Djibouti",
    },
    {
        src: centraficanRepublicFlag,
        alt: "centrafican republic flag image",
        name: "RCA",
    },
];

const PaymentMethodsSection = () => {
    return (
        <section className="flex flex-col justify-between items-center px-20 min-[1120px]:px-40 pt-20 pb-28 gap-5">
            <Badge text="Moyen de paiement" />
            <div className="flex flex-col items-center w-full min-[950px]:w-1/2 gap-4 text-center">
                <h1 className="text-2xl md:text-4xl leading-snug font-bold tracking-wide">
                    Pays où vous pouvez envoyer de l'argent
                </h1>
                <p className="flex font-light text-pretty mb-4">
                    Pays ou vous pouvez envoyer de l’argent Via Sendmo avec les
                    opérateurs mobile money disponibles
                </p>
            </div>
            <div className="flex flex-wrap justify-center w-full gap-7">
                {countriesImages.map((image, index) => (
                    <ImageTextIconCard
                        key={index}
                        image={image}
                        title={image.name}
                        icon={<DropdownIcon />}
                        className="w-full sm:w-[160px]"
                    />
                ))}
            </div>
        </section>
    );
};

export default PaymentMethodsSection;
