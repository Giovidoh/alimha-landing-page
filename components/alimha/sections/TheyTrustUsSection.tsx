import Image from "next/image";
import React from "react";
import circle_vector4 from "@/public/assets/circle-vector-4.png";
import plus_vector3 from "@/public/assets/plus-vector-3.png";
import codifyLogo from "@/public/assets/codify-logo.png";
import soudhuLogo from "@/public/assets/soudhu-logo.png";
import odeytech from "@/public/assets/Odeytech.jpg";
import ubaLogo from "@/public/assets/uba-logo.png";
import ecobankLogo from "@/public/assets/ecobank-logo.png";
import { useTranslations } from "next-intl";

const TheyTrustUsSection = () => {
    const t = useTranslations("AlimhaPage");

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
                    {t("They trust us")}
                </h3>
            </div>
            <div className="mb-6">
                <h1 className="font-bold text-[32px] xl:text-[44px] leading-[40px] xl:leading-[52.6px] pb-4">
                    {t("Our partners & support")}
                </h1>
                <p className="max-w-[595px] text-xl text-gray-1">
                    {t("They trust us section description")}
                </p>
            </div>
            <div className="flex md:hidden justify-between items-center w-full">
                {/* Small devices */}
                <Image src={ecobankLogo} alt="ecobank logo" height={32.5} />
                <Image src={soudhuLogo} alt="soudhu logo" height={32.5} />
                <Image src={ubaLogo} alt="uba logo" height={65} />
                <Image src={codifyLogo} alt="codify logo" height={47.5} />
                <Image src={odeytech} alt="odeytech logo" height={32.5} />
                {/* <Image src={orange_money} alt="orange money icon" height={25} />
                <Image src={wave} alt="wave icon" height={40} />
                <Image src={moov_money} alt="moov money icon" height={40} />
                <Image src={mtn_momo} alt="mtn momo icon" height={35} />
                <Image src={free_money} alt="free money icon" height={62.5} />
                <Image src={tmoney} alt="tmoney icon" height={37.5} /> */}
            </div>
            <div className="hidden md:flex justify-between items-center w-full">
                {/* Large devices */}
                <Image src={ecobankLogo} alt="ecobank logo" height={65} />
                <Image src={soudhuLogo} alt="soudhu logo" height={65} />
                <Image src={ubaLogo} alt="uba logo" height={130} />
                <Image src={codifyLogo} alt="codify logo" height={95} />
                <Image src={odeytech} alt="odeytech logo" height={65} />
                {/* <Image src={orange_money} alt="orange money icon" height={55} /> */}
                {/* <Image src={wave} alt="wave icon" height={80} /> */}
                {/* <Image src={moov_money} alt="moov money icon" height={80} /> */}
                {/* <Image src={mtn_momo} alt="mtn momo icon" height={70} /> */}
                {/* <Image src={free_money} alt="free money icon" height={125} /> */}
                {/* <Image src={tmoney} alt="tmoney icon" height={75} /> */}
            </div>
        </section>
    );
};

export default TheyTrustUsSection;
