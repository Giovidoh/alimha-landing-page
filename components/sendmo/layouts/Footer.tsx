import React from "react";
import Input from "../Input";
import Button from "../buttons/Button";
import SendmoLogo from "@/public/assets/sendmo-logo.svg";
import Link from "next/link";
import LeftIconButton from "../buttons/LeftIconButton";
import AppStoreIcon from "@/public/assets/app-store-icon.svg";
import GooglePlayIcon from "@/public/assets/google-play-icon.svg";
import FacebookIcon from "@/public/assets/facebook-icon.svg";
import LinkedinIcon from "@/public/assets/linkedin-icon.svg";
import InstagramIcon from "@/public/assets/instagram-icon.svg";
import XIcon from "@/public/assets/x-icon.svg";
import YoutubeIcon from "@/public/assets/youtube-icon.svg";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-between items-center w-full bg-gray-50 px-5 sm:px-20 min-[1120px]:px-40 pt-14 pb-5">
            <div className="flex flex-wrap justify-between items-center w-full gap-10">
                <h1 className="text-2xl md:text-4xl text-center lg:text-start">
                    Simplifier vos transferts <br /> d’argent à tout moment
                </h1>
                <div className="flex">
                    <Input
                        placeholder="E-mail"
                        className="w-full text-xl font-light rounded-tl-md rounded-bl-md"
                    />
                    <div className="relative h-[44px] w-[200px]">
                        <Button
                            text="S'abonner"
                            className="absolute top-0 -left-2 w-full h-full font-medium text-xl"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-between w-full gap-10 mt-24">
                <SendmoLogo className="h-12" />
                <div className="flex flex-wrap justify-between w-[60%] gap-10">
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-[#5B5B5B] text-xl font-semibold">
                            Usely link
                        </h2>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            Fonctionnalités
                        </Link>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            Avantages
                        </Link>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            Téléchargement
                        </Link>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            Contact
                        </Link>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            FAQ
                        </Link>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-[#5B5B5B] text-xl font-semibold">
                            Resources
                        </h2>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            Conditions d’utilisation
                        </Link>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            Politique de confidentialité
                        </Link>
                        <Link href={"#"} className="text-[#313131] text-sm">
                            Mention Légale
                        </Link>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <h2 className="text-[#5B5B5B] text-xl font-semibold">
                            App
                        </h2>
                        <LeftIconButton
                            icon={<AppStoreIcon className="fill-white" />}
                            text="App Store"
                            className="justify-center w-full h-14 px-3 gap-2"
                        />
                        <LeftIconButton
                            icon={<GooglePlayIcon className="fill-white" />}
                            text="Google Play"
                            className="justify-center w-full h-14 px-3 gap-2"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full mt-40">
                <div className="flex justify-between items-center w-full text-[12px] font-light text-[#A9A9A9] border-t border-t-[#B1B1B1] pt-3">
                    <span>Tous droits réservés ! Copyright 2024</span>
                    <div className="flex gap-4">
                        <FacebookIcon className="fill-[#A0A0A0] h-4" />
                        <LinkedinIcon className="fill-[#A0A0A0] h-4" />
                        <InstagramIcon className="fill-[#A0A0A0] h-4" />
                        <XIcon className="fill-[#A0A0A0] h-4" />
                        <YoutubeIcon className="fill-[#A0A0A0] stroke-[#A0A0A0] h-4" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
