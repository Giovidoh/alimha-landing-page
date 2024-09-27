import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import aboutUsIllustration from "@/public/assets/about-us-illustration.png";
import DottedTextCard from "../cards/DottedTextCard";

const AboutUsSection = () => {
    const t = useTranslations("AlimhaPage.AboutUsSection");
    return (
        <section
            id="who-are-we"
            className="relative flex justify-center items-center bg-white w-full h-fit px-[5%] lg:px-[10%] pt-20 min-[900px]:pt-56 pb-56"
        >
            <div className="grid grid-cols-1 min-[800px]:grid-cols-3 items-center w-full h-full gap-x-5 gap-y-5 min-[800px]:gap-y-60 min-[1200px]:gap-y-20">
                <div className="flex justify-center items-center min-w-[330px] h-fit min-[800px]:min-h-[230px] place-self-center min-[800px]:place-self-start">
                    <DottedTextCard
                        title={t("card1.title")}
                        body={t("card1.body")}
                        cardBgColor="bg-primary-blue"
                        dotBgColor="bg-white"
                        dotColor="bg-primary-blue"
                        titleColor="text-white"
                        bodyColor="text-white"
                    />
                </div>
                <div className="hidden min-[800px]:block row-span-2 place-self-center">
                    <Image
                        src={aboutUsIllustration}
                        alt="about us illustration"
                        height={450}
                    />
                </div>
                <div className="flex justify-center items-center min-w-[330px] h-fit min-[800px]:min-h-[230px] place-self-center min-[800px]:place-self-end">
                    <DottedTextCard
                        title={t("card2.title")}
                        body={t("card2.body")}
                    />
                </div>
                <div className="flex justify-center items-center min-w-[330px] h-fit min-[800px]:min-h-[230px] place-self-center min-[800px]:place-self-start">
                    <DottedTextCard
                        title={t("card3.title")}
                        body={t("card3.body")}
                    />
                </div>
                <div className="flex justify-center items-center min-w-[330px] h-fit min-[800px]:min-h-[230px] place-self-center min[800px]:place-self-end">
                    <DottedTextCard
                        title={t("card4.title")}
                        body={t("card4.body")}
                        cardBgColor="bg-primary-blue"
                        dotBgColor="bg-white"
                        dotColor="bg-primary-blue"
                        titleColor="text-white"
                        bodyColor="text-white"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
