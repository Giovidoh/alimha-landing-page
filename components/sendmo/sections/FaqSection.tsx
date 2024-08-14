import React from "react";
import Badge from "../badges/Badge";
import Accordion from "../Accordion";

const FaqSection = () => {
    return (
        <section className="flex flex-col justify-between items-center gap-10 px-40 py-20">
            <Badge text="FAQS" px="px-14" />
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-4xl leading-snug font-bold tracking-wide whitespace-nowrap">
                    Avez-vous des questions?
                </h1>
                <p className="text-gray-1 font-light">
                    Quelques questions utiles pour l’utilisation de Sendmo.
                </p>
            </div>
            <div className="w-[80%]">
                <Accordion
                    title="Comment ouvrir un compte Sendmo"
                    body="Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas."
                />
            </div>
        </section>
    );
};

export default FaqSection;
