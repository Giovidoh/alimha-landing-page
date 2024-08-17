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
        <section className="flex justify-between items-center w-full px-40 pt-24 pb-10">
            <div className="flex flex-col items-start w-1/2 gap-6 mb-24">
                <Badge text="Application de transfert d’argent" />
                <h1 className="text-5xl leading-snug font-semibold tracking-wide whitespace-nowrap">
                    Simplifiez Vos <br /> Dépôts d'Argent
                </h1>
                <p className="font-light pb-4 whitespace-nowrap">
                    Gérez vos transactions de manière intuitive et sécurisée
                    avec SendMo. <br /> Faites des dépôts rapides en quelques
                    clics, où que vous soyez.
                </p>
                <div className="flex gap-6">
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
            <div className="relative flex justify-end w-1/2">
                <Image
                    src={sendmoHeroImage}
                    alt="hero image"
                    height={650}
                    priority
                />
                <div className="absolute bottom-1/3 -left-14">
                    <ImagesCollection images={countriesImages} />
                </div>
                <div className="absolute top-14 right-1/4">
                    <ImagesCollection images={paymentMethodsImages} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
