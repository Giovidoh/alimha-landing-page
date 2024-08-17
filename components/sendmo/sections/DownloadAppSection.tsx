/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import sendmoDownloadAppMobileImage from "@/public/assets/sendmo-download-app-mobile-image.png";
import Badge from "../badges/Badge";
import AppDownloadersButton1 from "../buttons/AppDownloadersButton1";
import GooglePlayIcon from "@/public/assets/google-play-icon.svg";
import AppStoreIcon from "@/public/assets/app-store-icon.svg";

const DownloadAppSection = () => {
    return (
        <section
            id="download_section"
            className="flex justify-between items-center px-40"
        >
            <div className="relative bg-secondary-blue w-full h-full px-20 pt-14 pb-14 rounded-md before:content-[''] before:absolute before:top-0 before:left-0 before:bg-sendmo-download-app-bg before:bg-no-repeat before:bg-cover before:opacity-45 before:w-full before:h-full">
                <div className="flex items-center">
                    <div className="relative flex flex-col items-start gap-8 text-white w-1/2">
                        <Badge text="Téléchargement" />
                        <h1 className="text-4xl leading-snug font-bold tracking-wide whitespace-nowrap">
                            Téléchargez SendMo <br /> Aujourd'hui
                        </h1>
                        <p className="font-light">
                            <span className="font-bold text-base">
                                Disponible sur Android et iOS
                            </span>
                            <br /> Rejoignez des milliers d'utilisateurs
                            satisfaits et téléchargez SendMo dès aujourd'hui
                            pour une expérience de dépôt mobile money sans
                            pareille.
                        </p>
                        <div className="flex gap-6">
                            <AppDownloadersButton1
                                text="google play"
                                icon={
                                    <GooglePlayIcon className="fill-white group-hover:fill-black transition" />
                                }
                                className="border-white hover:border-black hover:text-black"
                            />
                            <AppDownloadersButton1
                                text="app store"
                                icon={
                                    <AppStoreIcon className="fill-white group-hover:fill-black transition" />
                                }
                                className="border-white hover:border-black hover:text-black"
                            />
                        </div>
                    </div>
                    <div>
                        <Image
                            src={sendmoDownloadAppMobileImage}
                            alt="sendmo mobile app download image"
                            height={540}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadAppSection;
