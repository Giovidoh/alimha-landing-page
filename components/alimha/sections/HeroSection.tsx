/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import ButtonGradientStyle1 from "../buttons/ButtonGradientStyle1";
import ButtonStyle1 from "../buttons/ButtonStyle1";
import ClientsReviewsRate from "../ClientsReviewsRate";
import actor1 from "@/public/assets/actor1.png";
import plus2 from "@/public/assets/plus-vector-2.png";
import circle5 from "@/public/assets/circle-vector-5.png";
import { useTranslations } from "next-intl";

const HeroSection = () => {
    const t = useTranslations("AlimhaPage.HeroSection");

    return (
        <section className="flex bg-white h-fit w-full px-[5%] lg:px-[10%] pt-10 md:pt-12 lg:pt-18 xl:pt-32 pb-24 bg-hero-world-img bg-contain bg-no-repeat bg-top">
            <div className="w-full md:w-1/2 max-md:text-center">
                <h1 className="font-bold text-[32px] lg:text-[54px] leading-[50px] lg:leading-[64.8px] pb-4">
                    {t("heading.first")} <br />
                    <span className="text-primary-blue">
                        {t("heading.second")}
                    </span>
                </h1>
                <p className="text-[#1E1E1E] pb-8">{t("supporting text")}</p>
                <div className="flex flex-col justify-between md:flex-row md:items-center gap-3 w-full pb-8">
                    <ButtonGradientStyle1
                        fromColor="from-primary-blue"
                        toColor="to-secondary-blue"
                        text={t("Become partner")}
                        width="w-full md:w-1/2"
                    />
                    <ButtonStyle1
                        text={t("Learn more")}
                        width="w-full md:w-1/2"
                    />
                </div>
                <ClientsReviewsRate />
            </div>
            <div className="hidden md:block md:relative md:w-1/2">
                <Image
                    src={actor1}
                    alt="hero actor image"
                    height={600}
                    className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
                />
                {/* <Image
                    src={plus2}
                    alt="plus icon"
                    height={30}
                    width={30}
                    className="absolute top-[190px] right-[80px] z-0"
                />
                <Image
                    src={circle5}
                    alt="circle icon"
                    height={30}
                    width={30}
                    className="absolute bottom-[20px] right-[275px] z-0"
                /> */}
            </div>
        </section>
    );
};

export default HeroSection;
