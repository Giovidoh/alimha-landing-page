import React from "react";
import Badge from "../badges/Badge";
import Accordion from "../Accordion";

const accordionInfos = [
    {
        title: "Comment ouvrir un compte Sendmo",
        body: "Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.",
    },
    {
        title: "Sendmo est-elle facile à comprendre et à utiliser ?",
        body: "Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.",
    },
    {
        title: "Les utilisateurs de Sendmo ont-ils accès à un service d'assistance à la clientèle ?",
        body: "Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.",
    },
    {
        title: "Comment démarrer avec sendmo ?",
        body: "Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.",
    },
    {
        title: "Comment démarrer avec sendmo ?",
        body: "Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.Lorem ipsum dolor sit amet consectetur. Erat turpis id egestas facilisi. Egestas justo tellus pharetra egestas.",
    },
];

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
            <div className="flex flex-col w-[80%] gap-4">
                {accordionInfos.map((accordion, index) => (
                    <Accordion
                        key={index}
                        title={accordion.title}
                        body={accordion.body}
                    />
                ))}
            </div>
        </section>
    );
};

export default FaqSection;
