"use client";
import Image from "next/image";
import React from "react";
import ButtonGradientStyle1 from "../buttons/ButtonGradientStyle1";
import map_img from "@/public/assets/map.png";
import dot_vector1 from "@/public/assets/dot-vector-1.png";
import line_vector2 from "@/public/assets/line-vector2.png";
import plus_vector3 from "@/public/assets/plus-vector-3.png";
import circle_vector3 from "@/public/assets/circle-vector-3.png";
import linked_lines_vector from "@/public/assets/linked-line-vectors.png";
import africa_vector from "@/public/assets/africa-img.png";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const WhyUsSection = () => {
    const t = useTranslations("AlimhaPage.WhyUsSection");
    const pathname = usePathname();

    return (
        <section className="relative flex justify-between items-center px-[5%] lg:px-[10%] py-10 md:py-0 bg-white h-fit w-full">
            <Image
                src={line_vector2}
                alt="line vector"
                height={900}
                className="absolute left-0 -top-8"
            />
            <Image
                src={linked_lines_vector}
                alt="line vector"
                height={750}
                className="absolute right-0 top-0 h-full"
            />
            {/* <Image
                src={dot_vector1}
                alt="line vector"
                height={125}
                className="hidden md:block absolute top-[10%] left-[15%]"
            />
            <Image
                src={plus_vector3}
                alt="line vector"
                height={11}
                className="absolute top-[18%] left-[40%]"
            />
            <Image
                src={plus_vector3}
                alt="line vector"
                height={10}
                className="absolute top-[25%] right-[18%]"
            />
            <Image
                src={circle_vector3}
                alt="line vector"
                height={30}
                className="hidden md:block absolute bottom-[20%] left-1/2"
            /> */}

            <div className="flex flex-col items-center md:items-start w-full z-10">
                <div className="flex justify-center md:justify-start items-center h-fit pb-4">
                    {/* <h3 className="font-semibold text-xl text-primary-blue whitespace-nowrap pt-4 pr-6">
                        Pourquoi nous ?
                    </h3> */}
                    <Image src={map_img} alt="map icon" height={40} />
                </div>
                <div>
                    <h2 className="font-bold  max-md:text-center text-[32px] xl:text-[44px] leading-[40px] xl:leading-[52.6px] pb-5">
                        {t("heading.first")} <br /> {t("heading.second")}
                    </h2>
                    <p className=" max-md:text-center text-base font-normal tracking-wide text-[#333333] pb-5 md:pb-10">
                        {t("Alimha is present") + " " + t("in1")}{" "}
                        <span className="text-primary-blue font-semibold">
                            {t("Senegal")}
                        </span>
                        , {pathname == "/fr/alimha" && t("in1")}{" "}
                        <span className="text-primary-blue font-semibold">
                            {t("Togo")}
                        </span>
                        , {pathname == "/fr/alimha" && t("in2")}{" "}
                        <span className="text-primary-blue font-semibold">
                            {t("Guinea")}
                        </span>
                        , {pathname == "/fr/alimha" && t("in1")}{" "}
                        <span className="text-primary-blue font-semibold">
                            {t("Djibouti")}
                        </span>
                        , {pathname == "/fr/alimha" && t("in2")}{" "}
                        <span className="text-primary-blue font-semibold">
                            {t("Central Africa")}
                        </span>
                        , {t("and")}{" "}
                        {pathname == "/fr/alimha" ? t("in1") : t("the")}{" "}
                        <span className="text-primary-blue font-semibold">
                            {t("Comoros")}
                        </span>
                        . <br />
                    </p>
                </div>
                {/* <ButtonGradientStyle1 text="En savoir plus" /> */}
            </div>
            <div className="hidden md:flex justify-center w-full pt-24 z-10">
                <Image src={africa_vector} alt="africa vector" height={600} />
            </div>
        </section>
    );
};

export default WhyUsSection;
