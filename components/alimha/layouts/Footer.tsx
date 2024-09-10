/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import LogoFooter from "../LogoFooter";
import FooterLink from "../FooterLink";
import footer_bg from "@/public/assets/footer-bg.png";
import circle_vector4 from "@/public/assets/circle-vector-4.png";
import circle_vector6 from "@/public/assets/circle-vector-6.png";
import plus_vector4 from "@/public/assets/plus-vector-4.png";
import dot_vector2 from "@/public/assets/dot-vector-2.png";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("AlimhaPage");

    return (
        <footer className="relative flex flex-col justify-evenly items-center bg-gradient-to-br from-primary-blue via-secondary-blue  to-secondary-blue px-[5%] xl:px-[10%] overflow-hidden">
            {/* <Image
                src={circle_vector4}
                alt="circle vector"
                height={35}
                className="absolute bottom-56 left-5"
            />
            <Image
                src={circle_vector6}
                alt="circle vector"
                height={35}
                className="absolute top-28 right-5"
            />
            <Image
                src={plus_vector4}
                alt="plus vector"
                height={20}
                className="absolute bottom-32 right-10"
            />
            <Image
                src={plus_vector4}
                alt="plus vector"
                height={20}
                className="absolute top-10 left-1/3"
            />
            <Image
                src={dot_vector2}
                alt="dot vector"
                height={95}
                className="absolute -top-10 right-5"
            />
            <Image
                src={footer_bg}
                alt="footer background image"
                height={765}
                className="absolute bottom-0 right-0 opacity-20"
            /> */}

            <div className="flex flex-wrap md:flex-nowrap justify-between items-start w-full gap-10 pt-40 z-10">
                <div className="max-w-[280px]">
                    <LogoFooter />
                    <p className="text-white text-justify leading-[19.13px] mt-5">
                        {t("Footer description")}
                    </p>
                    {/* <div className="flex justify-between items-center w-2/3 pt-7">
                        <Image
                            src={facebook_icon}
                            alt="facebook icon"
                            height={16}
                        />
                        <Image
                            src={linkedin_icon}
                            alt="linkedin icon"
                            height={16}
                        />
                        <Image
                            src={instagram_icon}
                            alt="instagram icon"
                            height={16}
                        />
                        <Image src={x_icon} alt="x icon" height={16} />
                        <Image
                            src={youtube_icon}
                            alt="youtube icon"
                            height={16}
                        />
                    </div> */}
                </div>
                <div className="flex flex-wrap justify-between gap-10 w-full">
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-dark-blue text-2xl mt-3">
                            Alimha
                        </h3>
                        <div className="flex flex-col gap-3 mt-7">
                            <FooterLink href="#" text={t("About us")} />
                            <FooterLink href="#" text={t("Why us")} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h3 className="font-semibold text-dark-blue text-2xl mt-3">
                            {t("Solutions")}
                        </h3>
                        <div className="flex flex-col gap-3 mt-7">
                            <FooterLink
                                href="#"
                                text={t("Software Development")}
                            />
                            <FooterLink
                                href="#"
                                text={t("Payment Solutions Aggregator")}
                            />
                            <FooterLink
                                href="#"
                                text={t("Money Deposit Mobile Application")}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h3 className="font-semibold text-dark-blue text-2xl mt-3">
                            {t("Resources")}
                        </h3>
                        <div className="flex flex-col gap-3 mt-7">
                            <FooterLink href="#" text={t("Terms of use")} />
                            <FooterLink href="#" text={t("Privacy policy")} />
                            <FooterLink href="#" text={t("Legal Notice")} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <h3 className="font-semibold text-dark-blue text-2xl mt-3">
                            {t("Contact us")}
                        </h3>
                        <div className="flex flex-col gap-3 mt-7">
                            <FooterLink href="#" text="infos@alimha.com" />
                            <FooterLink
                                href="#"
                                text="+221 33 844 30 81 / +221 77 889 21 74"
                            />
                            <FooterLink
                                href="#"
                                text="Mamelles, Dakar - Sénégal"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full pt-40 pb-10">
                <div className="flex flex-col sm:flex-row justify-between items-center w-full text-sm text-center font-light text-dark-blue border-t border-t-dark-blue pt-3 gap-3">
                    <span>{t("Copyright")}</span>
                    <span>ALIMHA</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
