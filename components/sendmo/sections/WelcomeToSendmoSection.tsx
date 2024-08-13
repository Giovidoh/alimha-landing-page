import React from "react";
import Image from "next/image";
import blackWoman from "@/public/assets/black-woman.png";
import avatar1 from "@/public/assets/avatar-1.png";
import avatar2 from "@/public/assets/avatar-2.png";
import avatar3 from "@/public/assets/avatar-3.png";
import avatar4 from "@/public/assets/avatar-4.png";
import avatar5 from "@/public/assets/avatar-5.png";
import Badge from "../badges/Badge";
import Button from "../buttons/Button";
import ImagesCollections from "../ImagesCollection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const avatarsImages = [
    {
        src: avatar1,
        alt: "avatar 1 image",
    },
    {
        src: avatar2,
        alt: "avatar 2 image",
    },
    {
        src: avatar3,
        alt: "avatar 3 image",
    },
    {
        src: avatar4,
        alt: "avatar 4 image",
    },
];

const WelcomeToSendmoSection = () => {
    return (
        <section className="flex justify-between items-center bg-gray-100 px-40 pt-10 pb-20">
            <div className="relative">
                <Image src={blackWoman} alt="black woman image" />
                <div className="absolute top-48 -left-4">
                    <ImagesCollections
                        images={avatarsImages}
                        imageHeight={40}
                    />
                </div>
                <div className="absolute bottom-1 right-10">
                    <div className="flex items-center w-fit px-3 py-2 gap-2 bg-white rounded-lg shadow-lg">
                        <Image src={avatar5} alt="avatar 5 image" height={40} />
                        <p
                            className={`font-extrabold text-2xl ${inter.className}`}
                        >
                            <span className="text-green-1">+</span>150 000
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-5 mt-28">
                <Badge text="Bienvenue chez SendMo" />
                <h1 className="text-4xl leading-snug font-semibold tracking-wide whitespace-nowrap">
                    La Solution Innovante pour <br /> Vos Dépôts Mobile Money
                </h1>
                <p className="font-light mb-4">
                    Transférez Facilement, Déposez Rapidement, en Toute
                    Sécurité. Avec SendMo, simplifiez vos transactions
                    financières et connectez-vous sous-régionalement avec
                    confiance.
                </p>
                <Button text="Télécharger App" className="px-7 py-4" />
            </div>
        </section>
    );
};

export default WelcomeToSendmoSection;
