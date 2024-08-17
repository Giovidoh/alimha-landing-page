import Image from "next/image";
import React from "react";
import LogoFooter from "../LogoFooter";
import FooterLink from "../FooterLink";
import footer_bg from "@/public/assets/footer-bg.png";
import circle_vector4 from "@/public/assets/circle-vector-4.png";
import circle_vector6 from "@/public/assets/circle-vector-6.png";
import plus_vector4 from "@/public/assets/plus-vector-4.png";
import dot_vector2 from "@/public/assets/dot-vector-2.png";
import facebook_icon from "@/public/assets/facebook-icon.png";
import linkedin_icon from "@/public/assets/linkedin-icon.png";
import instagram_icon from "@/public/assets/instagram-icon.png";
import x_icon from "@/public/assets/x-icon.png";
import youtube_icon from "@/public/assets/youtube-icon.png";

const Footer = () => {
    return (
        <footer className="relative flex flex-col justify-evenly items-center bg-dark-blue px-[5%] xl:px-[10%] overflow-hidden">
            <Image
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
            />

            <div className="flex flex-wrap md:flex-nowrap justify-between items-start w-full pt-40 z-10">
                <div className="max-w-[280px] mr-5 mb-10">
                    <LogoFooter />
                    <p className="text-secondary-blue text-justify leading-[19.13px] mt-5">
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
                <div className="flex flex-wrap justify-start gap-10 w-full">
                    <div className="flex flex-col justify-between h-[99px]">
                        <h3 className="font-semibold text-white text-xl">
                            Alimha
                        </h3>
                        <FooterLink href="#" text="Qui sommes nous ?" />
                        <FooterLink href="#" text="Pourquoi - nous ?" />
                    </div>
                    <div className="flex flex-col justify-between h-[134px]">
                        <h3 className="font-semibold text-white text-xl">
                            Solutions
                        </h3>
                        <FooterLink
                            href="#"
                            text="Agrégateur de Solutions de Paiement"
                        />
                        <FooterLink
                            href="#"
                            text="Application Mobile de Transfert d'Argent"
                        />
                        <FooterLink
                            href="#"
                            text="Développement de Logiciels"
                        />
                    </div>
                    <div className="flex flex-col justify-between h-[134px]">
                        <h3 className="font-semibold text-white text-xl">
                            Resources
                        </h3>
                        <FooterLink href="#" text="Conditions d’utilisation" />
                        <FooterLink
                            href="#"
                            text="Politique de confidentialité"
                        />
                        <FooterLink href="#" text="Mention Légale" />
                    </div>
                    <div className="flex flex-col justify-between h-[134px]">
                        <h3 className="font-semibold text-white text-xl">
                            Contactez-nous
                        </h3>
                        <FooterLink href="#" text="infos@alimha.com" />
                        <FooterLink href="#" text="+221 78 589 87 85" />
                        <FooterLink
                            href="#"
                            text="Medina, rue 4 Dakar , Sénégal"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full pt-40 pb-10">
                <div className="flex justify-between w-full text-sm font-light text-secondary-blue border-t border-t-primary-blue pt-3">
                    <span>Tous droits réservés ! Copyright 2024</span>
                    <span>ALIMAH 2024</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
