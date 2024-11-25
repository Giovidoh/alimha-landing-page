"use client";
import React, { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import aboutUsIllustration from "@/public/assets/about-us-illustration.png";
import DottedTextCard from "../cards/DottedTextCard";
import { motion, useInView } from "framer-motion";
import { getLangDir } from "rtl-detect";

const AboutUsSection = () => {
    const localActive = useLocale();
    const direction = getLangDir(localActive);
    const t = useTranslations("AlimhaPage.AboutUsSection");

    const tagRef = useRef(null);
    const tagIsInView = useInView(tagRef, {
        margin: "0px 0px -5% 0px",
        once: true,
    });

    const centerImageRef = useRef(null);
    const centerImageIsInView = useInView(centerImageRef, {
        margin: "0px 0px -8% 0px",
        once: false,
    });

    const card1Ref = useRef(null);
    const card1IsInView = useInView(card1Ref, {
        margin: "0px 0px -10% 0px",
        once: true,
    });

    const card2Ref = useRef(null);
    const card2IsInView = useInView(card2Ref, {
        margin: "0px 0px -10% 0px",
        once: true,
    });

    const card3Ref = useRef(null);
    const card3IsInView = useInView(card3Ref, {
        margin: "0px 0px -10% 0px",
        once: true,
    });

    const card4Ref = useRef(null);
    const card4IsInView = useInView(card4Ref, {
        margin: "0px 0px -10% 0px",
        once: false,
    });

    return (
        <section
            id="about-us"
            className="relative flex justify-center items-center bg-white w-full px-[5%] lg:px-[10%] pt-20 py-24 min-[900px]:pt-32 min-[900px]:pb-56 overflow-hidden"
        >
            <div className="w-full max-w-[1400px]">
                <div className="flex flex-col items-center gap-20">
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
                        {t("tag")}
                    </motion.span>

                    <div className="grid grid-cols-1 min-[800px]:grid-cols-3 items-center w-full h-full gap-x-5 gap-y-5 min-[800px]:gap-y-60 min-[1200px]:gap-y-20">
                        <motion.div
                            ref={card1Ref}
                            className="flex justify-center items-center min-w-[330px] h-full min-[800px]:min-h-[230px] place-self-center min-[800px]:place-self-start"
                            initial={{
                                x: "-200px",
                                opacity: 0,
                            }}
                            animate={
                                card1IsInView && {
                                    x: 0,
                                    opacity: 1,
                                }
                            }
                            transition={{
                                duration: 1,
                                ease: "circOut",
                            }}
                        >
                            <DottedTextCard
                                title={t("card1.title")}
                                body={t("card1.body")}
                                cardBgColor="bg-primary-blue"
                                dotBgColor="bg-white"
                                dotColor="bg-primary-blue"
                                titleColor="text-white"
                                bodyColor="text-white"
                            />
                        </motion.div>
                        <motion.div
                            ref={centerImageRef}
                            className="hidden min-[800px]:block row-span-2 place-self-center"
                            initial={{
                                scale: 0.5,
                                opacity: 0.5,
                                rotate: 0,
                            }}
                            animate={
                                centerImageIsInView && {
                                    scale: 1,
                                    opacity: 1,
                                    rotate: 360,
                                }
                            }
                            transition={{
                                duration: 2,
                                ease: "circOut",
                            }}
                        >
                            <Image
                                src={aboutUsIllustration}
                                alt="about us illustration"
                                height={450}
                            />
                        </motion.div>
                        <motion.div
                            ref={card2Ref}
                            className="flex justify-center items-center min-w-[330px] h-full min-[800px]:min-h-[230px] place-self-center min-[800px]:place-self-end"
                            initial={{
                                x: "200px",
                                opacity: 0,
                            }}
                            animate={
                                card2IsInView && {
                                    x: 0,
                                    opacity: 1,
                                }
                            }
                            transition={{
                                duration: 1,
                                ease: "circOut",
                            }}
                        >
                            <DottedTextCard
                                title={t("card2.title")}
                                body={t("card2.body")}
                            />
                        </motion.div>
                        <motion.div
                            ref={card3Ref}
                            className="flex justify-center items-center min-w-[330px] h-full min-[800px]:min-h-[230px] place-self-center min-[800px]:place-self-start"
                            initial={{
                                x: "-200px",
                                opacity: 0,
                            }}
                            animate={
                                card3IsInView && {
                                    x: 0,
                                    opacity: 1,
                                }
                            }
                            transition={{
                                duration: 1,
                                ease: "circOut",
                            }}
                        >
                            <DottedTextCard
                                title={t("card3.title")}
                                body={t("card3.body")}
                            />
                        </motion.div>
                        <motion.div
                            ref={card4Ref}
                            className="flex justify-center items-center min-w-[330px] h-full min-[800px]:min-h-[230px] place-self-center min[800px]:place-self-end"
                            initial={{
                                x: "200px",
                                opacity: 0,
                            }}
                            animate={
                                card4IsInView && {
                                    x: 0,
                                    opacity: 1,
                                }
                            }
                            transition={{
                                duration: 1,
                                ease: "circOut",
                            }}
                        >
                            <DottedTextCard
                                title={t("card4.title")}
                                body={t("card4.body")}
                                cardBgColor="bg-primary-blue"
                                dotBgColor="bg-white"
                                dotColor="bg-primary-blue"
                                titleColor="text-white"
                                bodyColor="text-white"
                            />
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{
                        x: direction == "rtl" ? "-100%" : "100%",
                        y: "-100%",
                        rotate: direction == "rtl" ? 210 : -30,
                    }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`absolute top-[100%] ${
                        direction == "rtl" ? "left-[70%]" : "right-[70%]"
                    } z-10`}
                >
                    <div className="bg-gradient-to-r from-secondary-blue to-white/0 w-[1000px] h-[80px] ml-5 rounded-full"></div>
                    <div className="bg-gradient-to-r from-secondary-blue to-white/0  w-[930px] h-[150px] rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUsSection;
