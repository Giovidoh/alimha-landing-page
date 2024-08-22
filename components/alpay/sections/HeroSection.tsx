import React from "react";
import Button from "../buttons/Button";
import Image from "next/image";
import womanWithComputerImage from "@/public/assets/woman-with-a-computer.png";

const HeroSection = () => {
    return (
        <section className="relative flex justify-between items-center bg-primary-blue w-full px-5 sm:px-20 min-[1120px]:px-40 before:content-[''] before:absolute before:top-0 before:left-0 before:bg-sendmo-download-app-bg before:bg-no-repeat before:bg-cover before:opacity-30 before:w-full before:h-full">
            <div className="relative flex items-center w-full h-full pt-14 ">
                <div className="flex flex-col gap-5 w-1/2 text-white">
                    <h1 className="text-5xl font-semibold">
                        Agrégateur de Solutions de Paiement
                    </h1>
                    <p className="font-semibold">
                        Simplifiez et Sécurisez Vos Transactions Financières.
                    </p>
                    <p className="font-light mb-7">
                        Intégration Facile, Gestion Efficace. Optimisez vos
                        opérations financières avec notre agrégateur de
                        paiements, conçu pour centraliser et automatiser toutes
                        vos transactions de manière fluide.
                    </p>
                    <div className="flex gap-10">
                        <Button
                            text="Contactez-nous"
                            className="bg-white hover:bg-secondary-blue text-primary-blue hover:text-white border border-white hover:border-primary-blue px-5 py-3"
                        />
                        <Button
                            text="En Savoir Plus"
                            className="bg-primary-blue  hover:bg-white text-white hover:text-primary-blue border border-white px-5 py-3"
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <Image
                        src={womanWithComputerImage}
                        alt="image of a woman with a computer"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
