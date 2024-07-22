import React from "react";
import LogoFooter from "./LogoFooter";
import FooterLink from "./FooterLink";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-evenly items-center bg-dark-blue px-[10%]">
            <div className="flex justify-between items-start w-full pt-40">
                <div className="max-w-[280px]">
                    <LogoFooter />
                    <p className="text-secondary-blue text-justify leading-[19.13px] mt-5">
                        Rejoignez la Révolution Technologique Découvrez comment
                        Alimha and Company peut transformer votre manière de
                        faire des affaires. Contactez-nous dès aujourd&apos;hui
                        !
                    </p>
                    <div></div>
                </div>
                <div className="flex flex-col justify-between h-[99px]">
                    <h3 className="font-semibold text-white text-xl">Alimha</h3>
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
                    <FooterLink href="#" text="Développement de Logiciels" />
                </div>
                <div className="flex flex-col justify-between h-[134px]">
                    <h3 className="font-semibold text-white text-xl">
                        Resources
                    </h3>
                    <FooterLink href="#" text="Conditions d’utilisation" />
                    <FooterLink href="#" text="Politique de confidentialité" />
                    <FooterLink href="#" text="Mention Légale" />
                </div>
                <div className="flex flex-col justify-between h-[134px]">
                    <h3 className="font-semibold text-white text-xl">
                        Contactez-nous
                    </h3>
                    <FooterLink href="#" text="infos@alimha.com" />
                    <FooterLink href="#" text="+221 78 589 87 85" />
                    <FooterLink href="#" text="Medina, rue 4 Dakar , Sénégal" />
                </div>
            </div>
            <div className="w-full pt-40 pb-10">
                <div className="flex justify-between w-full text-sm font-light text-secondary-blue border-t border-t-primary-blue pt-3">
                    <span>Tous droits réservés ! Copyright 2021</span>
                    <span>ALIMAH 2024</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
