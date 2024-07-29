import Image from "next/image";
import React from "react";
import international_icon from "@/public/images/international-icon.png";
import circle_vector4 from "@/public/images/circle-vector-4.png";
import plus_vector3 from "@/public/images/plus-vector-3.png";
import orange_money from "@/public/images/orange-money.png";
import wave from "@/public/images/wave.png";
import moov_money from "@/public/images/moov-money.png";
import mtn_momo from "@/public/images/mtn-momo.png";
import free_money from "@/public/images/free-money.png";
import tmoney from "@/public/images/tmoney.png";

const TheyTrustUsSection = () => {
    return (
        <section className="relative flex flex-col justify-evenly items-center text-center px-[5%] lg:px-[10%] bg-white h-fit w-full pt-12 pb-24">
            <Image
                src={circle_vector4}
                alt="circle vector"
                height={30}
                className="absolute bottom-52 left-10"
            />
            <Image
                src={plus_vector3}
                alt="circle vector"
                height={20}
                className="absolute top-28 -right-1"
            />

            <div className="flex flex-col items-center h-fit">
                <Image
                    src={international_icon}
                    alt="international icon"
                    height={50}
                />
                <h3 className="font-semibold text-xl text-primary-blue pt-4">
                    Ils nous font confiance
                </h3>
            </div>
            <div className="mb-6">
                <h1 className="font-bold text-[44px] leading-[52.6px] pb-4">
                    Nos Moyens de paiement
                </h1>
                <p className="max-w-[595px] text-xl text-gray-1">
                    Alimha regroupe la crème des opérateurs d’Afrique en matière
                    de moyens de paiement digitales.
                </p>
            </div>
            <div className="flex justify-between items-center w-full">
                {/* Small devices */}
                <Image
                    src={orange_money}
                    alt="orange money icon"
                    height={25}
                    className="block md:hidden"
                />
                <Image
                    src={wave}
                    alt="wave icon"
                    height={40}
                    className="block md:hidden"
                />
                <Image
                    src={moov_money}
                    alt="moov money icon"
                    height={40}
                    className="block md:hidden"
                />
                <Image
                    src={mtn_momo}
                    alt="mtn momo icon"
                    height={35}
                    className="block md:hidden"
                />
                <Image
                    src={free_money}
                    alt="free money icon"
                    height={62.5}
                    className="block md:hidden"
                />
                <Image
                    src={tmoney}
                    alt="tmoney icon"
                    height={37.5}
                    className="block md:hidden"
                />

                {/* Large devices */}
                <Image
                    src={orange_money}
                    alt="orange money icon"
                    height={55}
                    className="hidden md:block"
                />
                <Image
                    src={wave}
                    alt="wave icon"
                    height={80}
                    className="hidden md:block"
                />
                <Image
                    src={moov_money}
                    alt="moov money icon"
                    height={80}
                    className="hidden md:block"
                />
                <Image
                    src={mtn_momo}
                    alt="mtn momo icon"
                    height={70}
                    className="hidden md:block"
                />
                <Image
                    src={free_money}
                    alt="free money icon"
                    height={125}
                    className="hidden md:block"
                />
                <Image
                    src={tmoney}
                    alt="tmoney icon"
                    height={75}
                    className="hidden md:block"
                />
            </div>
        </section>
    );
};

export default TheyTrustUsSection;
