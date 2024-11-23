"use client";
import React, { useRef } from "react";
import Card from "../cards/Card";
import PaymentIcon from "@/public/assets/payment-icon.svg";
import TransactionIcon from "@/public/assets/alimha-transaction-icon.svg";
import SoftwareIcon from "@/public/assets/software-icon.svg";
import { useLocale, useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { getLangDir } from "rtl-detect";

const OurServicesSection = () => {
    const localActive = useLocale();
    const direction = getLangDir(localActive);
    const t = useTranslations("AlimhaPage.OurServicesSection");

    const tagRef = useRef(null);
    const tagIsInView = useInView(tagRef, {
        margin: "0px 0px -100px 0px",
        once: true,
    });

    const headingRef = useRef(null);
    const headingIsInView = useInView(headingRef, {
        margin: "0px 0px -150px 0px",
        once: true,
    });

    const firstCardRef = useRef(null);
    const firstCardIsInView = useInView(firstCardRef, {
        margin: "0px 0px -220px 0px",
        once: true,
    });

    const secondCardRef = useRef(null);
    const secondCardIsInView = useInView(secondCardRef, {
        margin: "0px 0px -220px 0px",
        once: true,
    });

    return (
        <section
            id="our-services"
            className="relative flex flex-col justify-evenly items-center bg-[#F8F8F8] w-full px-[5%] lg:px-[10%] pt-20 lg:pt-40 pb-24"
        >
            <div className="w-full max-w-[1400px]">
                <div className="flex flex-col justify-center items-center min-[900px]:items-start gap-5">
                    <span
                        ref={tagRef}
                        style={{
                            transform: tagIsInView
                                ? "none"
                                : "translateX(-200px)",
                            opacity: tagIsInView ? 1 : 0,
                            transition: "all 1s ease-in-out",
                        }}
                        className="bg-tertiary text-secondary-blue text-sm min-[1280px]:text-base px-3 py-2 rounded-md"
                    >
                        {t("tag")}
                    </span>
                    <h2
                        ref={headingRef}
                        style={{
                            transform: headingIsInView
                                ? "none"
                                : "translateX(-200px)",
                            opacity: headingIsInView ? 1 : 0,
                            transition: "all 1s ease-in-out 1s",
                        }}
                        className="font-bold text-center min-[900px]:text-start text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug pb-4"
                    >
                        {t.rich("heading.first", {
                            span: (chunks) => (
                                <span className="text-primary-blue">
                                    {chunks}
                                </span>
                            ),
                        })}{" "}
                        <br />{" "}
                        {t.rich("heading.second", {
                            span: (chunks) => (
                                <span className="text-primary-blue">
                                    {chunks}
                                </span>
                            ),
                        })}
                    </h2>
                    {/* <p className="text-center md:text-left text-xl text-gray-2">
                    Des solutions simples pour vos Paiements et transfert
                    d’argent
                </p> */}
                </div>
                <div className="grid grid-cols-1 min-[900px]:grid-cols-2 justify-center min-[900px]:justify-start w-full gap-10">
                    <motion.div
                        ref={firstCardRef}
                        className="w-full h-full"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={firstCardIsInView && { scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            delay: 1,
                        }}
                    >
                        <Card
                            icon={<SoftwareIcon />}
                            bgColor={"bg-[#F1EFEF]"}
                            href={`/${localActive}/software-development/`}
                            title={t.rich("card1.title", {
                                span: (chunks) => (
                                    <span className="text-primary-blue">
                                        {chunks}
                                    </span>
                                ),
                                br: () => <br />,
                            })}
                            description={t("card1.description")}
                            buttonText={t("Learn more")}
                        />
                    </motion.div>

                    <motion.div
                        ref={secondCardRef}
                        className="w-full h-full"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={secondCardIsInView && { scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            delay: 1.5,
                        }}
                    >
                        <Card
                            icon={<PaymentIcon />}
                            bgColor={"bg-[#F1EFEF]"}
                            href="/en/alpay"
                            title={t.rich("card2.title", {
                                span: (chunks) => <span>{chunks}</span>,
                                br: () => <br />,
                            })}
                            description={t("card2.description")}
                            buttonText={t("Learn more")}
                            buttonBgColor="transparent"
                            highlighted={true}
                        />
                    </motion.div>

                    {/* <Card
                    icon={transaction_icon}
                    bgColor={"bg-[#FFF2E0]"}
                    href="/en/sendmo"
                    title={t("card3.title")}
                    titleColor="text-orange-1"
                    description={t("card1.description")}
                    buttonText={t("Learn more")}
                    buttonBgColor="bg-orange-1"
                /> */}
                </div>

                <motion.div
                    initial={{
                        x: direction == "rtl" ? "-100%" : "100%",
                        y: "-100%",
                        rotate: direction == "rtl" ? 30 : 150,
                    }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`absolute top-[60%] ${
                        direction == "rtl" ? "right-[70%]" : "left-[70%]"
                    } z-10`}
                >
                    <div className="bg-gradient-to-r from-secondary-blue to-white/0 w-[1000px] h-[80px] ml-5 rounded-full"></div>
                    <div className="bg-gradient-to-r from-secondary-blue to-white/0  w-[930px] h-[180px] rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurServicesSection;
