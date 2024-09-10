import Image from "next/image";
import React from "react";
import Card from "../Card";
import payment_icon from "@/public/assets/payment-icon.png";
import transaction_icon from "@/public/assets/transaction-icon.png";
import software_icon from "@/public/assets/software-icon.png";
import dot_vector1 from "@/public/assets/dot-vector-1.png";
import line_vector1 from "@/public/assets/line-vector1.png";
import { useTranslations } from "next-intl";

const OurServicesSection = () => {
    const t = useTranslations("AlimhaPage");
    return (
        <section
            id="our-services"
            className="relative flex flex-col justify-evenly px-[5%] lg:px-[10%] bg-white h-fit w-full pt-5 pb-24"
        >
            {/* <Image
                src={dot_vector1}
                alt="dot vector"
                height={120}
                className="absolute top-[40%] -left-20"
            /> */}
            <Image
                src={line_vector1}
                alt="line vector"
                height={900}
                className="absolute right-0"
            />
            <div className="flex justify-center md:justify-start items-center h-fit">
                <h3 className="font-semibold text-xl text-primary-blue pt-4 pr-6 mb-4">
                    {t("Our services")}
                </h3>
                {/* <Image src={fund1} alt="fund icon" height={54} width={54} /> */}
            </div>
            <div className="mb-6">
                <h1 className="font-bold text-center md:text-left text-[32px] lg:text-[44px] leading-[45px] lg:leading-[52.6px] pb-4">
                    {t("Expand your")} <br /> {t("business with Alimha")}
                </h1>
                {/* <p className="text-center md:text-left text-xl text-gray-2">
                    Des solutions simples pour vos Paiements et transfert
                    d’argent
                </p> */}
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                <Card
                    icon={software_icon}
                    bgColor={"bg-[#E9FFF5]"}
                    title={t("Software Development")}
                    description={t("Software Development description")}
                    buttonBgColor="bg-green-1"
                />
                <Card
                    icon={payment_icon}
                    bgColor={"bg-[#E0E2FF]"}
                    href="/en/alpay"
                    title={t("Payment Solutions Aggregator")}
                    description={t("Payment Solutions Aggregator description")}
                />
                <Card
                    icon={transaction_icon}
                    bgColor={"bg-[#FFF2E0]"}
                    href="/en/sendmo"
                    title={t("Money Deposit Mobile Application")}
                    titleColor="text-orange-1"
                    description={t(
                        "Money Deposit Mobile Application description"
                    )}
                    buttonBgColor="bg-orange-1"
                />
            </div>
        </section>
    );
};

export default OurServicesSection;
