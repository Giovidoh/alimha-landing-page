import Image from "next/image";
import React from "react";
import international_icon from "@/public/assets/international-icon.png";
import circle_vector4 from "@/public/assets/circle-vector-4.png";
import plus_vector3 from "@/public/assets/plus-vector-3.png";
import orange_money from "@/public/assets/orange-money.png";
import wave from "@/public/assets/wave.png";
import moov_money from "@/public/assets/moov-money.png";
import mtn_momo from "@/public/assets/mtn-momo.png";
import free_money from "@/public/assets/free-money.png";
import tmoney from "@/public/assets/tmoney.png";
import codifyLogo from "@/public/assets/codify-logo.png";
import soudhuLogo from "@/public/assets/soudhu-logo.png";
import odeytech from "@/public/assets/Odeytech.jpg";

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
                {/* <Image
                    src={international_icon}
                    alt="international icon"
                    height={50}
                /> */}
                <h3 className="font-semibold text-xl text-primary-blue pt-4">
                    Ils nous font confiance
                </h3>
            </div>
            <div className="mb-6">
                <h1 className="font-bold text-[32px] xl:text-[44px] leading-[40px] xl:leading-[52.6px] pb-4">
                    Nos partenaires & supports
                </h1>
                <p className="max-w-[595px] text-xl text-gray-1">
                    Nous travaillons avec des partenaires stratégiques de
                    différents secteurs pour enrichir notre offre de services.
                </p>
            </div>
            <div className="flex md:hidden justify-between items-center w-full">
                {/* Small devices */}
                <Image src={codifyLogo} alt="codify logo" height={42.5} />
                <Image src={soudhuLogo} alt="codify logo" height={32.5} />
                <Image src={odeytech} alt="codify logo" height={32.5} />
                <Image src={orange_money} alt="orange money icon" height={25} />
                <Image src={wave} alt="wave icon" height={40} />
                <Image src={moov_money} alt="moov money icon" height={40} />
                <Image src={mtn_momo} alt="mtn momo icon" height={35} />
                <Image src={free_money} alt="free money icon" height={62.5} />
                <Image src={tmoney} alt="tmoney icon" height={37.5} />
            </div>
            <div className="hidden md:flex justify-between items-center w-full">
                {/* Large devices */}
                <Image src={codifyLogo} alt="codify logo" height={85} />
                <Image src={soudhuLogo} alt="codify logo" height={65} />
                <Image src={odeytech} alt="codify logo" height={65} />
                <Image src={orange_money} alt="orange money icon" height={55} />
                <Image src={wave} alt="wave icon" height={80} />
                <Image src={moov_money} alt="moov money icon" height={80} />
                <Image src={mtn_momo} alt="mtn momo icon" height={70} />
                <Image src={free_money} alt="free money icon" height={125} />
                <Image src={tmoney} alt="tmoney icon" height={75} />
            </div>
        </section>
    );
};

export default TheyTrustUsSection;
