import Image from "next/image";
import React from "react";
import circle_vector6 from "@/public/assets/circle-vector-6.png";
import plus_vector4 from "@/public/assets/plus-vector-4.png";
import AlpayLogoWhite from "@/public/assets/alpay-logo-white.svg";
import facebook_icon from "@/public/assets/facebook-icon.png";
import linkedin_icon from "@/public/assets/linkedin-icon.png";
import instagram_icon from "@/public/assets/instagram-icon.png";
import x_icon from "@/public/assets/x-icon.png";
import youtube_icon from "@/public/assets/youtube-icon.png";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="relative flex flex-col justify-evenly items-center bg-primary-blue w-full px-[5%] xl:px-[10%] overflow-hidden">
            <Image
                src={circle_vector6}
                alt="circle vector"
                height={35}
                className="absolute bottom-56 left-5"
            />
            <Image
                src={plus_vector4}
                alt="plus vector"
                height={20}
                className="absolute bottom-32 right-10"
            />

            <div className="flex flex-wrap md:flex-nowrap justify-between items-start w-full pt-40 gap-20">
                <div className="max-w-[380px] mr-5 mb-10 text-pretty">
                    <AlpayLogoWhite />
                    <p className="font-extralight text-white text-justify leading-[19.13px] mt-5">
                        Rejoignez la Révolution Technologique Découvrez comment
                        Alimha and Company peut transformer votre manière de
                        faire des affaires. Contactez-nous dès aujourd&apos;hui
                        !
                    </p>
                    <div className="flex justify-between items-center w-2/3 pt-7">
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
                    </div>
                </div>
                <div className="flex flex-wrap justify-between w-full gap-10 text-white font-extralight">
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-xl">Alpay</h3>
                        <Link href="#">Accueil</Link>
                        <Link href="#">Nos services</Link>
                        <Link href="#">Avantages</Link>
                        <Link href="#">Comment ça mache</Link>
                        <Link href="#">Pourquoi Alpay</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-xl">Ressources</h3>
                        <Link href="#">Conditions d’utilisation </Link>
                        <Link href="#">Politique de confidentialité </Link>
                        <Link href="#">Mention Légale</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-xl">
                            Contactez-nous
                        </h3>
                        <Link href="#">infos@alpay.com</Link>
                        <Link href="#">+221 78 589 87 85</Link>
                        <Link href="#">Medina, rue 4 Dakar , Sénégal</Link>
                    </div>
                </div>
            </div>
            <div className="w-full pt-40 pb-10">
                <div className="flex flex-col sm:flex-row justify-between items-center w-full text-sm text-center font-light text-white border-t border-t-white pt-3 gap-3">
                    <span>Tous droits réservés ! Copyright 2024</span>
                    <span>ALIMAH 2024</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
