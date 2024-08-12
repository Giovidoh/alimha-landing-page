import Image from "next/image";
import React from "react";
import ButtonGradientStyle1 from "../buttons/ButtonGradientStyle1";
import map_img from "@/public/images/map.png";
import dot_vector1 from "@/public/images/dot-vector-1.png";
import line_vector2 from "@/public/images/line-vector2.png";
import plus_vector3 from "@/public/images/plus-vector-3.png";
import circle_vector3 from "@/public/images/circle-vector-3.png";
import linked_lines_vector from "@/public/images/linked-line-vectors.png";
import africa_vector from "@/public/images/africa-img.png";

const WhyUsSection = () => {
    return (
        <section className="relative flex justify-between items-center px-[5%] lg:px-[10%] py-10 bg-white h-fit w-full">
            <Image
                src={line_vector2}
                alt="line vector"
                height={900}
                className="absolute left-0 -top-8"
            />
            <Image
                src={linked_lines_vector}
                alt="line vector"
                height={900}
                className="absolute right-0 top-0 h-full"
            />
            <Image
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
            />

            <div className="flex flex-col items-center md:items-start w-full z-10">
                <div className="flex justify-center md:justify-start items-center h-fit pb-4">
                    <h3 className="font-semibold text-xl text-primary-blue whitespace-nowrap pt-4 pr-6">
                        Pourquoi nous ?
                    </h3>
                    <Image src={map_img} alt="map icon" height={40} />
                </div>
                <div className="mb-6">
                    <h1 className="font-bold text-center md:text-left text-[32px] xl:text-[44px] leading-[40px] xl:leading-[52.6px] pb-5">
                        Notre portée <br /> Mondiale
                    </h1>
                    <p className="text-center md:text-left text-base font-normal tracking-wide text-gray-2 pb-5 md:pb-10">
                        Alimha est présent au{" "}
                        <span className="text-primary-blue font-semibold">
                            Senegal
                        </span>
                        , au{" "}
                        <span className="text-primary-blue font-semibold">
                            Togo
                        </span>
                        , en{" "}
                        <span className="text-primary-blue font-semibold">
                            guinée
                        </span>
                        , au{" "}
                        <span className="text-primary-blue font-semibold">
                            Djibouti
                        </span>{" "}
                        en{" "}
                        <span className="text-primary-blue font-semibold">
                            Centrafrique
                        </span>
                        , et au{" "}
                        <span className="text-primary-blue font-semibold">
                            Comores
                        </span>
                        . <br /> Avec plus de 3 devises prises en charge avec
                        plusieurs options de règlement.
                    </p>
                </div>
                <ButtonGradientStyle1 text="En savoir plus" />
            </div>
            <div className="hidden md:block w-full pt-24 z-10">
                <Image src={africa_vector} alt="africa vector" height={800} />
            </div>
        </section>
    );
};

export default WhyUsSection;
