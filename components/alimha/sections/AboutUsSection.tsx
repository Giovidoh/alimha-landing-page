import Image from "next/image";
import React from "react";
import ButtonGradientStyle1 from "../buttons/ButtonGradientStyle1";
import actor2 from "@/public/assets/actor2.png";
import growth1 from "@/public/assets/growth1.png";
import growth2 from "@/public/assets/growth2.png";
import circle_vector1 from "@/public/assets/circle-vector-1.png";
import circle_vector2 from "@/public/assets/circle-vector-2.png";
import plus_vector1 from "@/public/assets/plus-vector-1.png";
import plus_vector2 from "@/public/assets/plus-vector-2.png";
import dash_vector1 from "@/public/assets/dash-vector-1.png";
import thumb_up from "@/public/assets/thumb-up.png";
import { useTranslations } from "next-intl";

const WhoAreWeSection = () => {
    const t = useTranslations("AlimhaPage");
    return (
        <section
            id="who-are-we"
            className="relative flex items-center bg-secondary-blue  w-full h-fit px-[5%] lg:px-[10%] py-10"
        >
            {/* <Image
                src={circle_vector1}
                alt="circle vector"
                height={80}
                className="hidden md:block absolute top-14 right-40"
            />
            <Image
                src={circle_vector2}
                alt="circle vector"
                height={25}
                className="absolute top-[25%] left-[15%]"
            />
            <Image
                src={plus_vector1}
                alt="circle vector"
                height={15}
                className="absolute top-[15%] left-[33%]"
            />
            <Image
                src={plus_vector2}
                alt="circle vector"
                height={20}
                className="hidden md:block absolute bottom-[15%] left-[33%]"
            />
            <Image
                src={dash_vector1}
                alt="dash vector"
                width={20}
                className="hidden md:block absolute top-[45%] left-[15%]"
            /> */}
            <div className="hidden md:block absolute bottom-[20%] left-[15%] p-3 bg-white shadow-md rounded-lg">
                <Image src={growth1} alt="growth image" height={60} />
            </div>
            <div className="hidden md:flex absolute items-center top-[27%] left-[35%] px-3 py-1 bg-[#19AFFF] shadow-md rounded-lg">
                <div className="bg-[#70CDFF] p-1 mr-2 rounded-lg">
                    <Image src={thumb_up} alt="thumb up image" height={30} />
                </div>
                <span className="text-white text-[24px] lg:text-[32px] font-medium">
                    200
                </span>
            </div>

            <div className="hidden md:block md:w-1/2">
                <Image src={actor2} alt="actor2 image" height={700} />
            </div>
            <div className="flex flex-col justify-between items-center md:items-start w-full md:w-1/2 h-fit md:pl-10 z-10">
                <div className="flex justify-center md:justify-start items-center w-1/2 h-fit pb-4">
                    <h3 className="font-semibold text-xl text-white whitespace-nowrap pt-4 pr-6">
                        {t("About us")}
                    </h3>
                    <Image src={growth2} alt="growth icon" height={35} />
                </div>
                <div className="mb-6">
                    <h1 className="font-bold text-dark-blue text-center md:text-left text-[32px] xl:text-[44px] leading-[40px] xl:leading-[52.6px] pb-7">
                        {t("Your growth partner")}
                    </h1>
                    <p className="text-white text-center md:text-left text-base">
                        {t("About us section description")}
                    </p>
                </div>
                <ButtonGradientStyle1
                    text={t("Learn more")}
                    fromColor="from-dark-blue"
                    toColor="to-dark-blue"
                />
            </div>
        </section>
    );
};

export default WhoAreWeSection;
