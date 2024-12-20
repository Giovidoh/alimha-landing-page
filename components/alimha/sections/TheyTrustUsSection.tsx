"use client";
import Image from "next/image";
import React, { useRef } from "react";
import codifyLogo from "@/public/assets/codify-logo.png";
import soudhuLogo from "@/public/assets/soudhu-logo.png";
import odeytech from "@/public/assets/Odeytech.jpg";
import ubaLogo from "@/public/assets/uba-logo.png";
import ecobankLogo from "@/public/assets/ecobank-logo.png";
import { motion, useInView } from "framer-motion";
import { FC } from "react";
import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";

interface TheyTrustUsSectionProps {
    tag: string;
    title: string;
    description: string;
}

const TheyTrustUsSection: FC<TheyTrustUsSectionProps> = ({
    tag,
    title,
    description,
}) => {
    const localActive = useLocale();
    const direction = getLangDir(localActive);

    const tagRef = useRef(null);
    const tagIsInView = useInView(tagRef, {
        margin: "0px 0px -10% 0px",
        once: true,
    });

    const headingRef = useRef(null);
    const headingIsInView = useInView(headingRef, {
        margin: "0px 0px -20% 0px",
        once: true,
    });

    const subHeadingRef = useRef(null);
    const subHeadingIsInView = useInView(subHeadingRef, {
        margin: "0px 0px -30% 0px",
        once: true,
    });

    return (
        <section className="relative flex flex-col justify-evenly items-center text-center bg-[#F8F8F8] w-full gap-7 px-[5%] lg:px-[10%] pt-12 pb-24">
            <div className="w-full max-w-[1400px]">
                <div className="flex flex-col items-center gap-4">
                    <motion.span
                        ref={tagRef}
                        className="bg-tertiary text-secondary-blue text-sm min-[1280px]:text-base px-3 py-2 rounded-md"
                        initial={{
                            scale: 0.5,
                            opacity: 0,
                        }}
                        animate={
                            tagIsInView && {
                                scale: 1,
                                opacity: 1,
                            }
                        }
                        transition={{
                            duration: 1,
                            ease: "circOut",
                        }}
                    >
                        {tag}
                    </motion.span>

                    <div className="flex flex-col gap-3">
                        <motion.h2
                            ref={headingRef}
                            className="font-bold text-center text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug"
                            initial={{
                                scale: 0.5,
                                opacity: 0,
                            }}
                            animate={
                                headingIsInView && {
                                    scale: 1,
                                    opacity: 1,
                                }
                            }
                            transition={{
                                duration: 1,
                                ease: "circOut",
                            }}
                        >
                            {title}
                        </motion.h2>
                        <motion.p
                            ref={subHeadingRef}
                            className="max-w-[595px] text-[#333333] text-sm lg:text-base min-[1200px]:text-lg"
                            initial={{
                                scale: 0.5,
                                opacity: 0,
                            }}
                            animate={
                                subHeadingIsInView && {
                                    scale: 1,
                                    opacity: 1,
                                }
                            }
                            transition={{
                                duration: 1,
                                ease: "circOut",
                            }}
                        >
                            {description}
                        </motion.p>
                    </div>
                </div>
                <div className="flex w-full overflow-hidden px-10">
                    <motion.div
                        animate={{
                            translateX: direction == "rtl" ? "50%" : "-50%",
                        }}
                        transition={{
                            duration: 15,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className={`flex flex-none md:hidden items-center gap-16 ${
                            direction == "rtl" ? "pl-16" : "pr-16"
                        } py-3`}
                    >
                        {/* Small devices */}
                        <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                            <Image
                                src={ecobankLogo}
                                alt="ecobank logo"
                                height={32.5}
                            />
                        </div>
                        <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                            <Image
                                src={soudhuLogo}
                                alt="soudhu logo"
                                height={32.5}
                            />
                        </div>
                        <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                            <Image src={ubaLogo} alt="uba logo" height={65} />
                        </div>
                        <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                            <Image
                                src={codifyLogo}
                                alt="codify logo"
                                height={47.5}
                            />
                        </div>
                        <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                            <Image
                                src={odeytech}
                                alt="odeytech logo"
                                height={58}
                            />
                        </div>

                        {/* Second set of logos for animation */}
                        <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                            <Image
                                src={ecobankLogo}
                                alt="ecobank logo"
                                height={32.5}
                            />
                        </div>
                        <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                            <Image
                                src={soudhuLogo}
                                alt="soudhu logo"
                                height={32.5}
                            />
                        </div>
                        <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                            <Image src={ubaLogo} alt="uba logo" height={65} />
                        </div>
                        <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                            <Image
                                src={codifyLogo}
                                alt="codify logo"
                                height={47.5}
                            />
                        </div>
                        <div className="flex justify-center items-center bg-white w-[130px] h-[80px] rounded-xl shadow-lg">
                            <Image
                                src={odeytech}
                                alt="odeytech logo"
                                height={58}
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        animate={{
                            translateX: direction == "rtl" ? "50%" : "-50%",
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                        className={`hidden md:flex md:flex-none items-center gap-24 ${
                            direction == "rtl" ? "pl-24" : "pr-24"
                        } py-7`}
                    >
                        {/* Large devices */}
                        <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                            <Image
                                src={ecobankLogo}
                                alt="ecobank logo"
                                height={65}
                            />
                        </div>
                        <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                            <Image
                                src={soudhuLogo}
                                alt="soudhu logo"
                                height={65}
                            />
                        </div>
                        <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                            <Image src={ubaLogo} alt="uba logo" height={130} />
                        </div>
                        <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                            <Image
                                src={codifyLogo}
                                alt="codify logo"
                                height={95}
                            />
                        </div>
                        <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                            <Image
                                src={odeytech}
                                alt="odeytech logo"
                                height={85}
                            />
                        </div>

                        {/* Second set of logos for animation */}
                        <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                            <Image
                                src={ecobankLogo}
                                alt="ecobank logo"
                                height={65}
                            />
                        </div>

                        <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                            <Image
                                src={soudhuLogo}
                                alt="soudhu logo"
                                height={65}
                            />
                        </div>

                        <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                            <Image src={ubaLogo} alt="uba logo" height={130} />
                        </div>

                        <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                            <Image
                                src={codifyLogo}
                                alt="codify logo"
                                height={95}
                            />
                        </div>

                        <div className="flex justify-center items-center bg-white w-[230px] h-[120px] rounded-xl shadow-lg">
                            <Image
                                src={odeytech}
                                alt="odeytech logo"
                                height={85}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TheyTrustUsSection;
