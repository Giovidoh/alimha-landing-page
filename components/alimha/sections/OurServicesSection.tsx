import React from "react";
import Card from "../Card";
import PaymentIcon from "@/public/assets/payment-icon.svg";
import TransactionIcon from "@/public/assets/alimha-transaction-icon.svg";
import SoftwareIcon from "@/public/assets/software-icon.svg";
import { useTranslations } from "next-intl";

const OurServicesSection = () => {
    const t = useTranslations("AlimhaPage.OurServicesSection");
    return (
        <section
            id="our-services"
            className="relative flex flex-col justify-evenly px-[5%] lg:px-[10%] bg-[#F8F8F8] h-fit w-full pt-20 lg:pt-40 pb-24"
        >
            <div className="flex flex-col items-center min-[900px]:items-start justify-center gap-5 h-fit">
                <span className="bg-tertiary text-secondary-blue text-sm min-[1280px]:text-base px-3 py-2 rounded-md">
                    {t("tag")}
                </span>
                <h2 className="font-bold text-center min-[900px]:text-start text-2xl lg:text-3xl min-[1200px]:text-4xl leading-tight min-[1200px]:leading-snug pb-4">
                    {t.rich("heading.first", {
                        span: (chunks) => (
                            <span className="text-primary-blue">{chunks}</span>
                        ),
                    })}{" "}
                    <br />{" "}
                    {t.rich("heading.second", {
                        span: (chunks) => (
                            <span className="text-primary-blue">{chunks}</span>
                        ),
                    })}
                </h2>
                {/* <p className="text-center md:text-left text-xl text-gray-2">
                    Des solutions simples pour vos Paiements et transfert
                    d’argent
                </p> */}
            </div>
            <div className="flex flex-wrap justify-center min-[900px]:justify-start w-full gap-10">
                <div className="w-[350px] lg:w-[500px]">
                    <Card
                        icon={<SoftwareIcon />}
                        bgColor={"bg-[#F1EFEF]"}
                        href="/en/alpay"
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
                </div>

                <div className="w-[350px] lg:w-[500px]">
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
                        highlighted={true}
                    />
                </div>

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
        </section>
    );
};

export default OurServicesSection;
