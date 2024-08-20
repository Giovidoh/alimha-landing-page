/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Badge from "../badges/Badge";
import AppDownloadersButton1 from "../buttons/AppDownloadersButton1";
import GooglePlayIcon from "@/public/assets/google-play-icon.svg";
import AppStoreIcon from "@/public/assets/app-store-icon.svg";
import ImagesCollection from "../ImagesCollection";
import senegalImg from "@/public/assets/senegal.png";
import togoImg from "@/public/assets/togo.png";
import guineeImg from "@/public/assets/guinee.png";
import djiboutiImg from "@/public/assets/djibouti.png";
import republiqueCentrafricaineImg from "@/public/assets/republique-centrafricaine.png";
import waveImg from "@/public/assets/wave.png";
import orangeMoneyImg from "@/public/assets/orange-money.png";
import moovMoneyImg from "@/public/assets/moov-money.png";
import tmoneyImg from "@/public/assets/tmoney.png";
import Image from "next/image";
import sendmoHeroImage from "@/public/assets/sendmo-hero-image.png";

const countriesImages = [
    {
        src: senegalImg,
        alt: "senegal image",
    },
    {
        src: togoImg,
        alt: "togo image",
    },
    {
        src: guineeImg,
        alt: "guinee image",
    },
    {
        src: djiboutiImg,
        alt: "djibouti image",
    },
    {
        src: republiqueCentrafricaineImg,
        alt: "republique centrafricaine image",
    },
];

const paymentMethodsImages = [
    {
        src: waveImg,
        alt: "wave image",
    },
    {
        src: orangeMoneyImg,
        alt: "orange money image",
    },
    {
        src: moovMoneyImg,
        alt: "moov money image",
    },
    {
        src: tmoneyImg,
        alt: "tmoney image",
    },
];

const HeroSection = () => {
    return (
        <section className="flex flex-col min-[930px]:flex-row justify-between items-center w-full px-5 sm:px-20 min-[1120px]:px-40 py-10">
            <div className="flex flex-col justify-center items-center sm:items-start w-full min-[930px]:w-1/2 gap-3 md:gap-6 min-[930px]:mb-24 z-10">
                <Badge text="Application de transfert d’argent" />
                <h1 className="text-3xl md:text-5xl text-center sm:text-start leading-snug font-semibold tracking-wide whitespace-nowrap">
                    Simplifiez Vos <br /> Dépôts d'Argent
                </h1>
                <p className="text-center sm:text-start text-pretty font-light pb-4">
                    Gérez vos transactions de manière intuitive et sécurisée
                    avec SendMo. Faites des dépôts rapides en quelques clics, où
                    que vous soyez.
                </p>
                <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-6">
                    <AppDownloadersButton1
                        text="google play"
                        icon={
                            <GooglePlayIcon className="fill-black group-hover:fill-secondary-blue transition" />
                        }
                        className="border-black hover:border-secondary-blue hover:text-secondary-blue"
                    />
                    <AppDownloadersButton1
                        text="app store"
                        icon={
                            <AppStoreIcon className="fill-black group-hover:fill-secondary-blue transition" />
                        }
                        className="border-black hover:border-secondary-blue hover:text-secondary-blue"
                    />
                </div>
            </div>
            <div className="relative flex justify-end w-1/2 max-[930px]:w-full">
                <div className="max-sm:hidden min-[930px]:hidden">
                    <Image
                        src={sendmoHeroImage}
                        alt="hero image"
                        height={300}
                        priority
                    />
                </div>
                <div className="hidden min-[930px]:block">
                    <Image
                        src={sendmoHeroImage}
                        alt="hero image"
                        height={650}
                        priority
                    />
                </div>
                <div className="hidden sm:block absolute bottom-14 left-0 min-[930px]:bottom-1/3 min-[930px]:-left-14">
                    <ImagesCollection images={countriesImages} />
                </div>
                <div className="hidden sm:block absolute top-5 min-[930px]:top-14 min-[930px]:right-1/4">
                    <ImagesCollection images={paymentMethodsImages} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
