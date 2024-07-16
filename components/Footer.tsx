import React from "react";
import LogoFooter from "./LogoFooter";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-evenly items-center bg-dark-blue px-[10%]">
            <div className="flex justify-between items-start w-full pt-40">
                <div className="max-w-[280px]">
                    <LogoFooter />
                    <p className="text-secondary-blue text-justify leading-[19.13px] mt-5">
                        Rejoignez la Révolution Technologique Découvrez comment
                        Alimha and Company peut transformer votre manière de
                        faire des affaires. Contactez-nous dès aujourd'hui !
                    </p>
                    <div></div>
                </div>
                <div className="flex flex-col justify-between h-[99px]">
                    <h3 className="font-semibold text-white text-xl">Alimha</h3>
                    <p className="text-secondary-blue font-light">
                        Qui sommes nous ?
                    </p>
                    <p className="text-secondary-blue font-light">
                        Pourquoi - nous ?
                    </p>
                </div>
                <div className="flex flex-col justify-between h-[134px]">
                    <h3 className="font-semibold text-white text-xl">
                        Solutions
                    </h3>
                    <p className="text-secondary-blue font-light">
                        Agrégateur de Solutions de Paiement
                    </p>
                    <p className="text-secondary-blue font-light">
                        Application Mobile de Transfert d'Argent
                    </p>
                    <p className="text-secondary-blue font-light">
                        Développement de Logiciels
                    </p>
                </div>
                <div className="flex flex-col justify-between h-[134px]">
                    <h3 className="font-semibold text-white text-xl">
                        Resources
                    </h3>
                    <p className="text-secondary-blue font-light">
                        Conditions d’utilisation{" "}
                    </p>
                    <p className="text-secondary-blue font-light">
                        Politique de confidentialité{" "}
                    </p>
                    <p className="text-secondary-blue">Mention Légale</p>
                </div>
                <div className="flex flex-col justify-between h-[134px]">
                    <h3 className="font-semibold text-white text-xl">
                        Contactez-nous
                    </h3>
                    <p className="text-secondary-blue font-light">
                        infos@alimha.com
                    </p>
                    <p className="text-secondary-blue font-light">
                        +221 78 589 87 85
                    </p>
                    <p className="text-secondary-blue font-light">
                        Medina, rue 4 Dakar , Sénégal
                    </p>
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
